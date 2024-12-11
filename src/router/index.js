import { createRouter, createWebHistory } from 'vue-router';
import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';
import Page3 from '../views/Page3.vue';
import Section from '../views/Section.vue';

const routes = [
  {
    path: '/',
    redirect: '/page1',
  },
  {
    path: '/page1',
    component: Page1,
    children: [
      { path: 'section1', component: Section, props: { sectionName: 'Section 1' } },
      { path: 'section2', component: Section, props: { sectionName: 'Section 2' } },
      { path: 'section3', component: Section, props: { sectionName: 'Section 3' } },
      { path: 'section4', component: Section, props: { sectionName: 'Section 4' } },
    ],
  },
  {
    path: '/page2',
    component: Page2,
    children: [
      { path: 'section1', component: Section, props: { sectionName: 'Section 1' } },
      { path: 'section2', component: Section, props: { sectionName: 'Section 2' } },
      { path: 'section3', component: Section, props: { sectionName: 'Section 3' } },
      { path: 'section4', component: Section, props: { sectionName: 'Section 4' } },
    ],
  },
  {
    path: '/page3',
    component: Page3,
    children: [
      { path: 'section1', component: Section, props: { sectionName: 'Section 1' } },
      { path: 'section2', component: Section, props: { sectionName: 'Section 2' } },
      { path: 'section3', component: Section, props: { sectionName: 'Section 3' } },
      { path: 'section4', component: Section, props: { sectionName: 'Section 4' } },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
