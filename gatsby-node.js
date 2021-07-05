const languages = require('./src/config/languages.json');

exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage, createRedirect },
}) => {
  // Delete the original page (since we are gonna create localized versions of it)

  const isEnvDevelopment = process.env.NODE_ENV === 'development';
  const originalPath = page.path;

  await deletePage(page);

  // Create one page for each locale
  await Promise.all(
    languages.map(async ({ lang, locale }) => {
      const localizedPath = `/${lang}${page.path}`;

      createRedirect({
        fromPath: originalPath,
        toPath: localizedPath,
        Language: lang,
        isPermanent: false,
        redirectInBrowser: isEnvDevelopment,
        statusCode: 301,
      });

      await createPage({
        ...page,
        path: localizedPath,
        context: {
          ...page.context,
          originalPath,
          lang,
          locale,
        },
      });
    })
  );

  // Create a fallback redirect if the language is not supported or the
  // Accept-Language header is missing for some reason
  createRedirect({
    fromPath: originalPath,
    toPath: `/${languages[0].lang}${page.path}`,
    isPermanent: false,
    redirectInBrowser: true,
    statusCode: 301,
  });
};
