function capitalize(name) {
  return name.slice(0, 1).toUpperCase().concat(name.slice(1, name.length));
}

module.exports = capitalize;
