---
nav: Image-check
group:
  title: Display
  order: 3
---

# @aelf-design/nextjs-registry

This package is used for check the compliance of images.

- check if the image size compliant, list images that exceed the size limit
- check if the image path is compliant, does it exist in multiple directories
- check if the image name is compliant, Excluding camel hump naming

# Install

```bash
yarn add @aelf-design/image-check
```

# Usage

1. add `image-check` command to your `scripts` in `package.json`

```js
...
"scripts": {
  "check": "image-check PATH_NEED_CHECK(default is .) IMAGE_SIZE_LIMIT(default is 100)"
}
...
```

2. run `yarn run check`

```bash
yarn run check
```

3. in the terminal you will see the results ![alt text](https://silver-abstract-unicorn-590.mypinata.cloud/ipfs/QmfAeQpAw88chrHbwH2YzD7g9EA9wvesrMKVH7aVoHcCFV?pinataGatewayToken=J-4VqFJOcNwmARnesBKmHYTpzCmzYA9o5Zx2On1Tp2VOC6W1DYjx45AygAaXHfpV)
