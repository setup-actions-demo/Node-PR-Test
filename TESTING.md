# Testing Suite Documentation

This document provides detailed information about the comprehensive testing suite for validating setup-node PRs.

## Overview

The testing suite consists of 5 main workflow files that comprehensively test the setup-node action across different dimensions:

1. **Matrix Testing** - Cross-platform and version compatibility
2. **Cache Testing** - Dependency caching validation  
3. **Edge Cases** - Special scenarios and configurations
4. **Performance** - Speed and resource usage benchmarking
5. **Package Managers** - Dedicated package manager testing

## Workflow Details

### 1. Main Testing Matrix (`test-matrix.yml`)

**Purpose**: Validate basic setup-node functionality across all supported environments.

**Matrix Dimensions**:
- Operating Systems: 7 different OS versions
- Node.js Versions: 4 non-EOL versions (18.x, 20.x, 22.x, 23.x)
- Total Combinations: 28 test scenarios

**Test Coverage**:
- Node.js installation verification
- Version validation
- Basic functionality testing
- Package installation capability
- Cross-platform compatibility

**Key Features**:
- Fail-fast disabled to see all failures
- Comprehensive logging
- Clean-up procedures

### 2. Cache Testing (`cache-test.yml`)

**Purpose**: Validate dependency caching functionality for all package managers.

**Test Scenarios**:
- npm cache validation (3 OS × 1 configuration = 3 jobs)
- yarn cache validation (3 OS × 1 configuration = 3 jobs) 
- pnpm cache validation (3 OS × 1 configuration = 3 jobs)
- Cache performance comparison (1 comprehensive job)

**Test Coverage**:
- Cache miss scenarios (first installation)
- Cache hit scenarios (subsequent installations)
- Cache restoration across different runners
- Performance comparison between package managers
- Cache directory validation

**Key Features**:
- Timing measurements
- Cache verification
- Cross-package manager comparison

### 3. Edge Cases Testing (`edge-cases.yml`)

**Purpose**: Test special configurations and edge scenarios.

**Test Categories**:
- **`.nvmrc` file resolution** - 3 OS testing
- **`package.json` engines field** - 3 OS testing  
- **Version resolution patterns** - Comprehensive single OS testing
- **Multiple version switching** - Single OS testing
- **Registry configuration** - Single OS testing
- **Architecture-specific installations** - 3 OS testing
- **Error handling** - Single OS testing

**Test Coverage**:
- File-based version specification
- Engine requirements validation
- Exact vs range version specifications
- LTS version resolution
- Custom registry configurations
- Scoped package registries
- Architecture compatibility
- Error scenario handling

### 4. Performance Benchmarking (`performance.yml`)

**Purpose**: Monitor performance and resource usage of setup-node operations.

**Test Categories**:
- **Setup Performance** - 3 OS × 4 Node versions = 12 jobs
- **Cache Performance** - 3 OS testing
- **Package Manager Performance** - Comprehensive comparison
- **Resource Monitoring** - System resource tracking
- **Version Switching** - Performance impact testing
- **Concurrent Operations** - Multi-process testing

**Metrics Collected**:
- Setup time measurements
- Memory usage before/after
- Disk space utilization
- Cache performance gains
- Package manager speed comparison
- Resource consumption patterns

**Key Features**:
- Millisecond-precision timing
- System resource monitoring
- Performance regression detection
- Comparative analysis

### 5. Package Manager Matrix (`package-managers.yml`)

**Purpose**: Dedicated testing for npm, yarn, and pnpm functionality.

**Test Categories**:
- **npm matrix** - 4 OS × 4 Node versions = 16 jobs
- **yarn matrix** - 3 OS × 3 Node versions = 9 jobs
- **pnpm matrix** - 3 OS × 3 Node versions = 9 jobs
- **Package manager comparison** - Feature comparison
- **Workspace/monorepo testing** - 3 OS testing
- **Registry authentication** - Configuration testing

**Test Coverage**:
- Package manager installation
- Dependency resolution
- Lockfile handling
- Script execution
- Workspace functionality
- Registry configuration
- Authentication scenarios

## Sample Projects

### Project Types

Each sample project tests different aspects of Node.js development:

#### 1. Basic npm Project (`sample-projects/basic-npm/`)
- **Purpose**: Test standard npm workflows
- **Features**: CommonJS, npm scripts, lodash dependency
- **Tests**: Basic functionality, package installation
- **Files**: package.json, index.js, test.js, package-lock.json

#### 2. TypeScript Yarn Project (`sample-projects/typescript-yarn/`)
- **Purpose**: Test TypeScript compilation and yarn workflows
- **Features**: TypeScript, yarn, axios dependency, build process
- **Tests**: TypeScript compilation, type checking
- **Files**: package.json, tsconfig.json, src/, dist/, yarn.lock

#### 3. ESM pnpm Project (`sample-projects/esm-pnpm/`)
- **Purpose**: Test ES modules and pnpm workflows
- **Features**: ESM, pnpm, lodash-es, async/await
- **Tests**: ESM imports, module functionality
- **Files**: package.json (type: module), index.js, test.js, pnpm-lock.yaml

#### 4. .nvmrc Project (`sample-projects/nvmrc-project/`)
- **Purpose**: Test .nvmrc file version resolution
- **Features**: Version file specification
- **Tests**: Version matching, file reading
- **Files**: .nvmrc, package.json, index.js

#### 5. Engines Project (`sample-projects/engines-project/`)
- **Purpose**: Test package.json engines field
- **Features**: Engine requirements, semver validation
- **Tests**: Version compatibility, requirement checking
- **Files**: package.json (with engines), index.js

#### 6. Monorepo Project (`sample-projects/monorepo/`)
- **Purpose**: Test workspace and monorepo functionality
- **Features**: npm workspaces, cross-package dependencies
- **Tests**: Workspace installation, inter-package dependencies
- **Structure**: packages/package-a/, packages/package-b/

## Test Execution Strategy

### Parallel Execution
- Matrix jobs run in parallel for faster feedback
- Independent test categories for better resource utilization
- Fail-fast disabled to capture all failure scenarios

### Error Handling
- Comprehensive error logging
- Exit code validation
- Resource cleanup procedures
- Detailed failure reporting

### Performance Optimization
- Efficient caching strategies
- Minimal dependency sets
- Quick test execution
- Resource monitoring

## Maintenance Guidelines

### Adding New Tests
1. Identify the appropriate workflow file
2. Add test cases following existing patterns
3. Create sample projects if needed
4. Update documentation

### Updating Node.js Versions
1. Update version matrices in all workflow files
2. Test new versions against all scenarios
3. Update documentation with new version support

### Adding New Operating Systems
1. Add OS to matrix configurations
2. Test across all package managers
3. Validate cache functionality
4. Update documentation

### Package Manager Updates
1. Test new package manager versions
2. Validate cache compatibility
3. Update sample projects if needed
4. Document any breaking changes

## Troubleshooting

### Common Issues

#### Cache Not Working
- Check cache-dependency-path configuration
- Verify lockfile exists and is committed
- Check cache key generation

#### Version Resolution Failures
- Verify version specification format
- Check .nvmrc file content
- Validate engines field syntax

#### Package Manager Issues
- Ensure package manager is properly installed
- Check lockfile compatibility
- Verify registry configuration

#### Cross-Platform Failures
- Check path separator usage
- Verify command compatibility
- Test shell-specific syntax

### Debugging Workflows
1. Check workflow run logs for detailed error messages
2. Verify sample project configurations
3. Test locally with same Node.js/package manager versions
4. Check GitHub Actions documentation for platform-specific issues

## Metrics and Reporting

### Success Criteria
- All matrix combinations pass
- Cache functionality works across all package managers
- Performance metrics within acceptable ranges
- No regressions in existing functionality

### Failure Analysis
- Categorize failures by type (setup, cache, package manager, etc.)
- Identify patterns across operating systems or Node.js versions
- Document workarounds for known issues

### Performance Baselines
- Setup time benchmarks per OS/Node combination
- Cache performance improvements
- Package manager speed comparisons
- Resource usage patterns

This comprehensive testing approach ensures that setup-node PRs are thoroughly validated across all supported scenarios before merge.