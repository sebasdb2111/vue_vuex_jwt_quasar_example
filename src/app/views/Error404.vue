<template>
    <div class="home q-pa-md">
        <img
            alt="Quasar logo"
            class="align-center"
            src="../../statics/logo.png"
        />
        <q-card class="error-card">
            <q-card-section class="bg-red text-white">
                <div class="text-h6">ERROR 404</div>
                <div class="text-subtitle2">Oops. Nothing here...</div>
            </q-card-section>

            <q-card-actions align="around">
                <q-btn
                    v-if="canGoBack"
                    color="teal"
                    @click="goBack"
                    icon="keyboard_arrow_left"
                >
                    Go back
                </q-btn>
                <q-btn
                    color="teal"
                    @click="$router.replace('/')"
                    icon-right="home"
                >
                    Go home
                </q-btn>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            canGoBack: window.history.length > 1
        };
    },
    methods: {
        goBack() {
            window.history.go(-1);
        }
    }
};
</script>
