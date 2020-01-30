<template>
    <q-layout view="lHh Lpr lFf">
        <q-header v-if="currentUser" elevated class="glossy">
            <q-toolbar class="bg-secondary text-white shadow-2">
                <q-btn
                    flat
                    dense
                    round
                    class="q-mr-sm"
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    aria-label="Menu"
                    icon="menu"
                />
                <q-toolbar-title>
                    App Example
                </q-toolbar-title>

                <q-btn-toggle
                    @click="closeSession"
                    flat
                    stretch
                    toggle-color="yellow"
                    :options="[{ label: 'Log Out', value: 'logOut' }]"
                />
            </q-toolbar>
        </q-header>

        <q-drawer
            v-if="currentUser"
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            content-class="bg-grey-2"
        >
            <QDrawerList />
        </q-drawer>

        <q-page-container>
            <router-view class="layout-view" />
        </q-page-container>
    </q-layout>
</template>

<script>
import QDrawerList from './app/components/qDrawerList/qDrawerList';

export default {
    name: 'LayoutDefault',
    components: {
        QDrawerList
    },
    data() {
        return {
            leftDrawerOpen: false
        };
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        closeSession() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/');
        }
    }
};
</script>

<style></style>
