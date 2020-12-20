import Vue from 'vue'

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import List from "./components/List";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Dropdown from "./components/Dropdown";
import Show from "./components/Infyom/Show";
import Template from "./components/Infyom/Template";
// import templateold from "./components/Infyom/template1 old";
import template1 from "./components/Infyom/template1";
import template2 from "./components/Infyom/template2";
import template3 from "./components/Infyom/template3";
import template4 from "./components/Infyom/template4";
import template5 from "./components/Infyom/template5";
import template6 from "./components/Infyom/template6";
import template7 from "./components/Infyom/template7";
import template8 from "./components/Infyom/template8";

const routes = [
    {
        name: 'home',
        path: '/',
        component: List
    },
    {
        name: 'create',
        path: '/create',
        component: Create
    },
    {
        name: 'edit',
        path: '/edit/:id/product',
        // props: true,
        component: Edit
    },
    {
        name: 'dropdown',
        path: '/dropdown',
        component: Dropdown
    },
    {
        name: 'infyom',
        path: '/infyom',
        component: Show
    },
    {
        name: 'template',
        path: '/template',
        component: Template
    },
    // {
    //     name: 'template1 old',
    //     path: '/template1 old',
    //     component: templateold
    // },
    {
        name: 'template1',
        path: '/template1',
        component: template1
    },
    {
        name: 'template2',
        path: '/template2',
        component: template2
    },
    {
        name: 'template3',
        path: '/template3',
        component: template3
    },
    {
        name: 'template4',
        path: '/template4',
        component: template4
    },
    {
        name: 'template5',
        path: '/template5',
        component: template5
    },
    {
        name: 'template6',
        path: '/template6',
        component: template6
    },
    {
        name: 'template7',
        path: '/template7',
        component: template7
    },
    {
        name: 'template8',
        path: '/template8',
        component: template8
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;