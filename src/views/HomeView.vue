<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import Jobslisting from '@/components/JobsListings.vue';

</script>

<template>
    <Hero title="Find Jobs" subtitle="Find the job you need" />
    <HomeCards/>
    <Jobslisting :limit="2" :show-button="true"/>

</template>