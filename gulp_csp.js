// CSP inline hash
const gulp = require('gulp');
const hashstream = require('inline-csp-hash');
const crypto = require('crypto');
const hash = (s) => crypto.createHash("sha256").update(s).digest('base64');

function getRandStr(len) {
  var str = '';
  for (var i = 0; i < len; i++) {
    str += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return str;
}

// script White list [scripts in event handlers (eg onclick)]. 包含压缩的 inline js
unsafe_script_list = [
  "this.media='all';this.onload=null",
  'this.media="all",this.onload=null',
  "errorImgAvatar(this)",
  "errorImgCover(this)",
  "return false;",
  "return!1",
  "history.back()",
  "history.forward()",
  "window.location.reload()",
]

// script hash White list
unsafe_script_hash = ["'sha256-MXV1jvkHrZruEyFEOrQRjKs9WlPZC1V/3RLoKrkoDFQ='"]

unsafe_script_list.forEach(e => {
  unsafe_script_hash.push("'sha256-" + hash(e) + "'")
});


const nonce = getRandStr(15);

const csp_hash = async () => {
  gulp.src(['./public/**/*.html', '!./public/{lib,lib/**}', '!./public/{libs,libs/**}', '!./public/{media,media/**}'])
    .pipe(hashstream({
      what: 'script:not([type="application/ld+json"])',
      replace_cb: (s, hashes) => {
        unsafe_script_hash.push.apply(unsafe_script_hash, hashes);
        unsafe_script_hash = Array.from(new Set(unsafe_script_hash))
        return s
      }
    }));
}

const csp_replace = async () => {
  gulp.src(['./public/**/*.html', '!./public/{lib,lib/**}', '!./public/{libs,libs/**}', '!./public/{media,media/**}'])
    .pipe(hashstream({
      what: 'script:not([type="application/ld+json"])',
      replace_cb: (s, hashes) => {
        unsafe_script_hash = Array.from(new Set(unsafe_script_hash))
        s = s.replace(/<script.*?>/g, function (match) {
          return match.replace(/>/g, ` nonce='${nonce}'>`);
        });
        s=s.replace(/script-src 'self'[^;]*/, `script-src 'self' https: 'unsafe-hashes' 'nonce-${nonce}' 'strict-dynamic' ` + unsafe_script_hash.join(" "))
        return s
      }
    }))
    .pipe(gulp.dest('./public'));
}

module.exports = {
  csp_hash: csp_hash,
  csp_replace: csp_replace
}
