const theme = require('norska/theme');
const lazyloadAttributes = require('norska/frontend/lazyload/attributes');

(async () => {
  await theme.init({
    placeholder: 'Search for dungeon tiles, trees, houses, anything!',
    hitName: 'project',
    transforms: {
      preview(item) {
        const previewUrl = item.picture.preview;
        const options = { width: 600, placeholder: { width: 200 } };
        return lazyloadAttributes(previewUrl, options);
      },
    },
  });
})();
