const fs = require('fs').promises; // 使用 promises API 以便使用 async/await
const path = require('path');

const libName = `@ss-antd-material`;

// 获取当前目录下的lowcode文件夹路径
const lowcodeFolder = path.join(__dirname, 'lowcode');
const customTemplatePath = path.join(__dirname, 'custom-template');

const skipDirs = ['_setters', '_utils', 'affix', 'auto-complete', 'button', 'icon'];

// 异步函数处理复制和修改文件
async function processDirectory(dirent) {
  const folderName = dirent.name;
  const distDir = '/Users/sunliangmu/work/ss/ss-lowcode-comp/antd-lowcode-components';
  // const distDir = path.join(__dirname, 'new_temp');
  const newFolderPath = path.join(distDir, folderName);

  if (skipDirs.includes(folderName)) {
    return;
  }

  // 处理以_开头的文件夹
  if (folderName.startsWith('_')) {
    const newFolderPathCommon = path.join(distDir, '_common', folderName);
    await fs.mkdir(newFolderPathCommon, { recursive: true });
    await fs.cp(path.join(lowcodeFolder, folderName), newFolderPathCommon, { recursive: true });
    console.log(`Folder ${folderName} copied successfully to _common`);
  } else {
    // 处理不以_开头的文件夹
    await fs.mkdir(newFolderPath, { recursive: true });

    // 复制custom-template文件夹内容
    await fs.cp(customTemplatePath, newFolderPath, { recursive: true });

    const packageComposedName = `${libName}/${folderName}`;

    // 修改 package.json 文件
    const packageJsonPath = path.join(newFolderPath, 'package.json');
    let packageJson = await fs.readFile(packageJsonPath, 'utf8');
    packageJson = JSON.parse(packageJson);
    packageJson.name = packageComposedName;
    packageJson.description = folderName;
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

    // 修改 build.json 文件
    const buildJsonPath = path.join(newFolderPath, 'build.json');
    let buildJson = await fs.readFile(buildJsonPath, 'utf8');
    buildJson = JSON.parse(buildJson);
    buildJson.library = packageComposedName; // 修改 library 字段为文件夹名称
    await fs.writeFile(buildJsonPath, JSON.stringify(buildJson, null, 2), 'utf8');

    // 修改 move.sh 文件
    const moveShPath = path.join(newFolderPath, 'move.sh');
    let moveShContent = await fs.readFile(moveShPath, 'utf8');
    moveShContent = moveShContent.replace(/X-LOWCODE-COMPONENT/g, folderName);
    await fs.writeFile(moveShPath, moveShContent, 'utf8');

    // 在新文件夹内创建lowcode文件夹并复制内容
    const newLowcodeFolderPath = path.join(newFolderPath, 'lowcode');
    await fs.mkdir(newLowcodeFolderPath, { recursive: true });
    const newLowcodeSubFolderPath = path.join(newLowcodeFolderPath, folderName); // 创建以文件夹名称命名的子文件夹
    await fs.mkdir(newLowcodeSubFolderPath, { recursive: true });
    await fs.cp(path.join(lowcodeFolder, folderName), newLowcodeSubFolderPath, { recursive: true });
    console.log(`Files copied successfully for ${folderName}`);
  }
}

// 遍历lowcode文件夹下的所有子文件夹
async function startProcessing() {
  try {
    const dirents = await fs.readdir(lowcodeFolder, { withFileTypes: true });
    for (const dirent of dirents) {
      if (dirent.isDirectory()) {
        await processDirectory(dirent);
      }
    }
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

startProcessing();