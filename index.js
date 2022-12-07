

function tag(strings, ...values) {
  console.log(strings.raw);
  console.log(strings, values);
}

tag`a${1}b${2}c${3}d`;