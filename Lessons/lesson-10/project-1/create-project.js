const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");

async function createProject() {
  await fsPromises.mkdir("project");

  await fsPromises.mkdir(path.join(__dirname, "project", "styles"));
  await fsPromises.mkdir(path.join(__dirname, "project", "pages"));
  await fsPromises.mkdir(path.join(__dirname, "project", "public"));

  await fsPromises.mkdir(path.join(__dirname, "project", "public", "images"));
  await fsPromises.mkdir(path.join(__dirname, "project", "public", "icons"));
  await fsPromises.mkdir(path.join(__dirname, "project", "public", "fonts"));

  await fsPromises.appendFile(
    path.join("project", "index.html"),
    `
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/style.css" />
    <!-- <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> -->
    <title>New Project</title>
    </head>
    <body></body>
</html>
     `,
    {
      encoding: "utf-8",
    }
  );

  await fsPromises.appendFile(
    path.join(__dirname, "project", "styles", "style.css"),
    `* {
    padding : 0;
    margin : 0;
    box-sizing : border-box;
}

a {
    text-decoration : none;
    color : inherit;
}

li {
    list-style-type : none ;
}
    `,
    {
      encoding: "utf-8",
    }
  );

  await fsPromises.appendFile(
    path.join(__dirname, "project", "styles", "variables.css"),
    `:root {
    --primary-color : ;

    --primary-bg : ;

    --font-family-size : ;

    --font-size-size : ;

    --margin-size : ;
    --padding-size : ;
}
    `,
    {
      encoding: "utf-8",
    }
  );

  await fsPromises.appendFile(
    path.join("project", ".gitignore"),
    "node_modules",
    { encoding: "utf-8" }
  );
}

fs.exists(path.join(__dirname, "project"), (exist) => {
  if (!exist) {
    createProject();
  }
  if (exist) {
    fs.rmdir("/project", () => {
      console.log("removed");
    });
  }
});
