<template>
    <div class="home q-pa-md">
        <img
            alt="Quasar logo"
            class="align-center"
            src="../../statics/logo.png"
        />
        <q-card class="my-card">
            <q-tabs v-model="tab" class="bg-teal text-white">
                <q-tab label="Log In" name="login" />
                <q-tab label="Sing Up" name="signup" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="login">
                    <Login />
                </q-tab-panel>
                <q-tab-panel name="signup">
                    <Signup />
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
    </div>
</template>

<script>
import Login from '../components/home/Login.vue';
import Signup from '../components/home/Signup.vue';

export default {
    name: 'home',
    components: {
        Login,
        Signup
    },
    data() {
        return {
            tab: 'login'
        };
    }
};
</script>
