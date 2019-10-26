const upstream = async (currentPath) => {

  try {

    // Read config file content
    const configContent = await readConf(`${currentPath}`);

    // Check if upstream already added
    if (Validator.isUptreamed(configContent)) {
      throw new Error('Upstream already configured');
    }

    // Fetch current repository usernanme and repository name
    const { username, repository } = UserRepo();

    // Getting parent repo url
    const url = await ParentRepo(username, repository);
    if (!url) {
      throw new Error('Not a forked repository!!!');
    }
    module.exports = upstream;
