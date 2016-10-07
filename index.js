'use strict';

const compose = (input, prefix, suffix) => `${prefix}${input}${suffix}`;

module.exports = (obj, params) => {
  params = params || {};
  params = {prefix: params.prefix || '', suffix: params.suffix || '' };
  if (typeof obj === 'string') {
    return compose(obj, params.prefix, params.suffix);
  } else if (obj instanceof Array) {
    return obj.map(item => compose(item, params.prefix, params.suffix));
  } else if (obj instanceof Object) {
    Object.keys(obj).forEach(
      key => obj[key] = compose(obj[key], params.prefix, params.suffix)
    );
    return obj;
  }
};
