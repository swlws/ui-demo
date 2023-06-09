import inquirer from "inquirer";
import { execa } from "execa";
// const execa = require("execa");
// const detect = require("detect-port");
// const config = require("../config.json");
// 已占用端口列表
// const occupiedList = [];
// const checkPorts = Object.keys(config).map(
//   key =>
//     new Promise(resolve => {
//       detect(config[key].port).then(port => {
//         resolve({
//           package: key,
//           isOccupied: port !== config[key].port,
//         });
//       });
//     }),
// );

const config = {
  be: {
    name: "koa后台",
    packageName: "be",
    port: 8080,
  },
  "lit-ts": {
    name: "lit-ts",
    packageName: "lit-ts",
    port: 3000,
  },
  "react-ts": {
    name: "react-ts",
    packageName: "react-ts",
    port: 3001,
  },
  "vue3-ts": {
    name: "vue3-ts",
    packageName: "vue3-ts",
    port: 3002,
  },
};

// 运行选择命令
function runInquirerCommand() {
  inquirer
    .prompt([
      {
        name: "devPackage",
        type: "list",
        message: "请选择要启动应用",
        choices: Object.keys(config).map((key) => {
          const { name, packageName, port } = config[key];
          return {
            name: `${name}(${packageName}:${port})`,
            value: key,
          };
        }),
      },
    ])
    .then(async (answers) => {
      execa("pnpm", ["run", "dev"], {
        cwd: `./projects/${answers.devPackage}`,
        stdio: "inherit",
      });
    });
}

runInquirerCommand()

// Promise.all(checkPorts).then((ports) => {
//   occupiedList.push(...ports);
//   if (ports[0].isOccupied) {
//     runInquirerCommand();
//   } else {
//     execa("npm", ["run", "dev"], {
//       cwd: "./packages/base",
//       stdio: "inherit",
//     });
//   }
// });
