#!/usr/bin/env node

/**
 * This script ensures that the correct platform-specific Rollup package is installed.
 * It detects the current platform and installs the appropriate package if needed.
 */

const { execSync } = require('child_process');
const os = require('os');

function getPlatformPackage() {
  const platform = os.platform();
  const arch = os.arch();

  if (platform === 'linux') {
    // Check for musl vs glibc (Alpine Linux vs other Linux distros)
    try {
      const isMusl = execSync('ldd --version 2>&1 || true').toString().includes('musl');
      
      if (isMusl) {
        return '@rollup/rollup-linux-x64-musl';
      } else {
        return '@rollup/rollup-linux-x64-gnu';
      }
    } catch (e) {
      // Default to gnu if we can't determine
      return '@rollup/rollup-linux-x64-gnu';
    }
  } else if (platform === 'darwin') {
    if (arch === 'arm64') {
      return '@rollup/rollup-darwin-arm64';
    }
    return '@rollup/rollup-darwin-x64';
  } else if (platform === 'win32') {
    return '@rollup/rollup-win32-x64-msvc';
  }

  console.warn(`Unsupported platform: ${platform} ${arch}`);
  return null;
}

function installPlatformPackage() {
  const packageName = getPlatformPackage();
  
  if (!packageName) {
    console.log('No platform-specific Rollup package needed for this platform.');
    return;
  }

  try {
    console.log(`Checking for ${packageName}...`);
    
    try {
      require(packageName);
      console.log(`${packageName} is already installed.`);
    } catch (error) {
      console.log(`Installing ${packageName}...`);
      execSync(`npm install ${packageName}@latest --no-save`, { stdio: 'inherit' });
      console.log(`Successfully installed ${packageName}.`);
    }
  } catch (error) {
    console.error(`Error installing ${packageName}:`, error);
    process.exit(1);
  }
}

installPlatformPackage();
