---
name: Migrate Nuxt 3 + Content v2 to Latest Versions
overview: A comprehensive guide for migrating Nuxt 3 sites using Nuxt Content v2 to the latest versions of Nuxt and Nuxt Content v3, covering dependency updates, collection configuration, query API changes, component updates, and routing adjustments.
todos:
  - id: update-dependencies
    content: Update package.json with latest Nuxt and @nuxt/content versions, then run npm install
    status: pending
  - id: create-content-config
    content: Create content.config.ts file and define collections matching existing content structure with appropriate schemas
    status: pending
  - id: migrate-queries
    content: Replace all queryContent() calls with queryCollection() and update query methods (.findOne() → .first(), .find() → .all(), .sort() → .order())
    status: pending
  - id: update-components
    content: Replace ContentDoc usage with useAsyncData + queryCollection + ContentRenderer pattern, update ContentList queries
    status: pending
  - id: update-routing
    content: Create catch-all route if needed, ensure content paths match between queries and routes
    status: pending
  - id: update-layouts
    content: Migrate layouts from ContentDoc to new query pattern, ensure slot content works correctly
    status: pending
  - id: update-styling
    content: Review and update CSS selectors to work with new ContentRenderer structure, test markdown element styling
    status: pending
  - id: test-migration
    content: Test all content pages, navigation, and markdown rendering (tables, images, etc.)
    status: pending
---

# Migration Plan: Nuxt 3 + Content v2 to Latest Versions

## Overview

This plan provides a systematic approach to migrate Nuxt 3 sites using Nuxt Content v2 to the latest versions of Nuxt (v4+) and Nuxt Content (v3+). The migration involves breaking changes in the Content module's API, requiring updates to content configuration, queries, components, and routing.

## Prerequisites

- Backup your current codebase
- Review [Nuxt Content v3 Migration Guide](https://content.nuxt.com/docs/getting-started/migration)
- Check for any custom Content module integrations

## Migration Steps

### 1. Update Dependencies

- Update `package.json` to latest Nuxt and @nuxt/content versions
- Run `npm install` to install new dependencies
- Review breaking changes in release notes for both packages

### 2. Create Content Collections Configuration

- Create `content.config.ts` in project root (if it doesn't exist)
- Define collections using `defineCollection` and `defineContentConfig`
- Map existing content structure to collections (e.g., markdown files, data files)
- Define schemas for frontmatter fields using Zod for type safety
- Configure collection sources (file patterns, directories, exclusions)

### 3. Migrate Query APIs

- Replace `queryContent()` calls with `queryCollection(collectionName)`
- Update query methods:
- `.findOne()` → `.first()`
- `.find()` → `.all()`
- `.where()` syntax remains similar but may need adjustments
- `.sort()` → `.order(field, 'ASC'|'DESC')`
- Update type imports from `@nuxt/content/dist/runtime/types` to v3 equivalents
- Replace `fetchContentNavigation()` with `queryCollectionNavigation()`
- Replace `findSurround()` with `queryCollectionItemSurroundings()`

### 4. Update Components

- Replace `ContentDoc` component usage with `useAsyncData` + `queryCollection` + `ContentRenderer`
- Update `ContentList` component queries to use `queryCollection` instead of query objects
- Verify `ContentRenderer` still works (should be compatible)
- Check if any custom content components need updates

### 5. Update Routing

- Review `documentDriven` configuration in `nuxt.config.ts`
- Create catch-all route (`pages/[...slug].vue`) if content pages aren't auto-routing
- Ensure content paths match between collection queries and route paths
- Handle path variations (e.g., files with leading numbers, different naming conventions)
- Update `definePageMeta` usage if needed

### 6. Update Layouts

- If layouts use `ContentDoc`, migrate to `useAsyncData` + `queryCollection` pattern
- Ensure layouts receive content via slots properly
- Update layout selection logic if it depends on frontmatter

### 7. Update Styling

- Review CSS selectors targeting content elements
- Update selectors if ContentRenderer wraps content in new elements
- Ensure table, image, and other markdown element styles still apply
- Test prose component styling (if using custom prose components)

### 8. Configuration Updates

- Review `nuxt.config.ts` for Content module configuration changes
- Verify `documentDriven` and markdown options are still supported
- Check if any Content module options need updates

### 9. Testing & Validation

- Test all content pages load correctly
- Verify archive/list pages display content
- Check individual content page rendering
- Test navigation between content pages
- Verify images, tables, and other markdown elements render properly
- Check for any console errors or warnings

### 10. Cleanup

- Remove unused v2 imports and types
- Remove deprecated Content utilities
- Clean up redundant CSS
- Update any documentation or comments referencing v2 APIs

## Common Issues & Solutions

### Path Mismatches

- Content file paths may not match route paths exactly
- Solution: Implement flexible path matching in catch-all routes or query logic

### Type Errors

- TypeScript may not recognize new collection names initially
- Solution: Use type assertions (`as any`) temporarily, types will generate after build

### Missing Routes

- Content pages may not auto-generate routes
- Solution: Create catch-all route page to handle dynamic content routes

### Styling Issues

- CSS selectors may not target new component structure
- Solution: Add wrapper classes or update selectors to target ContentRenderer output

## Files Typically Modified

- `package.json` - Dependency versions
- `content.config.ts` - Collection definitions (new file)
- `nuxt.config.ts` - Content module configuration
- `pages/**/*.vue` - Query API updates, catch-all routes
- `layouts/**/*.vue` - Component migrations
- `assets/**/*.scss` or `assets/**/*.css` - Selector updates