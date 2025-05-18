// Import all modules
import { programmingDomainsModule } from './programmingDomains';
import { languageCategoriesModule } from './languageCategories';

// Map module IDs to module data
export const modules = {
  'programming-domains': programmingDomainsModule,
  'language-categories-uses': languageCategoriesModule,
};

// List of all available modules in order
export const moduleList = [
  {
    id: 'programming-domains',
    title: 'Programming Domains',
    description: 'Learn about different application areas that programming languages are designed for.',
  },
  {
    id: 'language-categories-uses',
    title: 'Language Categories by Uses',
    description: 'Explore how programming languages are categorized based on their intended use cases.',
  },
];
