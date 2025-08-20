Node-PR-Test

A comprehensive testing repository designed to validate pull requests created in the setup-node action against various Node.js workflow configurations. This repo serves as a controlled environment to test workflow failures and ensure PR changes work as expected across different scenarios.

Purpose

This repository provides a comprehensive testing suite for validating setup-node PRs with:

Full matrix testing across Node.js versions, operating systems, and package managers
Cache performance validation
Edge case scenario testing
Performance benchmarking
Package manager compatibility testing
Testing Matrix

Node.js Versions (Non-EOL)

Node.js 18.x (LTS until April 2025)
Node.js 20.x (LTS until April 2026)
Node.js 22.x (Current LTS until April 2027)
Node.js 23.x (Current release)

Operating Systems

ubuntu-latest (Ubuntu 22.04)
ubuntu-20.04
windows-latest (Windows Server 2022)
windows-2019
macos-latest (macOS 14)
macos-13
macos-12

Package Managers

npm (default)
yarn
pnpm
Workflow Files

1. Main Testing Matrix (.github/workflows/test-matrix.yml)

Comprehensive matrix testing across all OS/Node.js combinations:

Basic setup-node functionality validation
Node.js installation and version verification
Package manager installations
Cross-platform compatibility testing
2. Cache Testing (.github/workflows/cache-test.yml)

Dependency caching validation:

npm, yarn, and pnpm cache testing
Cache hit/miss scenario validation
Cache restoration across different runners
Performance comparison between package managers
3. Edge Cases Testing (.github/workflows/edge-cases.yml)

Specialized scenario testing:

.nvmrc file resolution
package.json engines field validation
Version resolution and fallbacks
Registry configuration testing
Architecture-specific installations
4. Performance Benchmarking (.github/workflows/performance.yml)

Performance and resource monitoring:

Setup time measurements across runners
Cache performance metrics
Resource usage monitoring
Version switching performance
Concurrent operations testing
5. Package Manager Matrix (.github/workflows/package-managers.yml)

Dedicated package manager testing:

npm, yarn, and pnpm compatibility
Lockfile handling validation
Workspace/monorepo functionality
Registry authentication testing
Sample Projects

The repository includes various sample projects for comprehensive testing:

Basic Projects

sample-projects/basic-npm/ - Basic Node.js project using npm
sample-projects/typescript-yarn/ - TypeScript project using yarn
sample-projects/esm-pnpm/ - ESM project using pnpm
Configuration Projects

sample-projects/nvmrc-project/ - Project with .nvmrc file
sample-projects/engines-project/ - Project with engines field in package.json
Advanced Projects

sample-projects/monorepo/ - Monorepo structure with workspaces
Workflow Triggers

All workflows are triggered on:

Pull requests to main or master branches
Push events to main or master branches
Manual dispatch (workflow_dispatch)
This ensures comprehensive validation of setup-node changes across all scenarios.

Usage

For setup-node Contributors

This repository automatically validates your PRs across all supported environments. Monitor the workflow runs to ensure your changes work correctly across:

All supported Node.js versions
All supported operating systems
All supported package managers
Various project configurations
For Testing New Scenarios

Add new test cases to the appropriate workflow file
Create sample projects if needed
Update documentation to reflect new test coverage
Workflow Status

Each workflow provides detailed logging and error reporting to help identify issues quickly. Failed runs will show:

Specific environment where failure occurred
Detailed error messages and logs
Performance metrics (where applicable)
Contributing

When adding new test scenarios:

Follow the existing pattern in workflow files
Add appropriate sample projects under sample-projects/
Update this README to document new test coverage
Ensure workflows remain focused and efficient
Note: This is a testing repository for development purposes, designed to ensure the reliability and compatibility of the setup-node action across all supported environments.
