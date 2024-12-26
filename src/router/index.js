import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotfounView from "@/views/NotfounView.vue";
import JobView from "@/views/JobView.vue";
import AddJob from "@/views/AddJob.vue";
import EditJob from "@/views/EditJob.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"home",
            component:HomeView,
        },
        {
            path:"/jobs",
            name:"jobs",
            component:JobsView,
        },

        {
            path:"/jobs/:id",
            name:'job',
            component:JobView,
        },
        {
            path:"/jobs/add",
            name:'add-job',
            component: AddJob,
        },
        {
            path:'/jobs/edit/:id',
            name: 'edit-job',
            component: EditJob,
        },        
        {
            path:'/:catchAll(.*)',
            name:'not-found',
            component:NotfounView,
        },
    ]

});

export default router;