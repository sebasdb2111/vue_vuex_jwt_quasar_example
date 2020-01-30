<template>
    <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
            outlined
            type="email"
            v-model="email"
            label="Email"
            lazy-rules
            :rules="[
                val => (val && val.length > 0) || 'Please type your email'
            ]"
        />
        <q-input
            outlined
            v-model="password"
            label="Password"
            lazy-rules
            :rules="[
                val =>
                    (val !== null && val !== '') || 'Please type your password'
            ]"
            :type="isPwd ? 'password' : 'text'"
        >
            <template v-slot:append>
                <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                />
            </template>
        </q-input>
        <div class="row justify-end">
            <q-btn type="submit" color="teal" :disabled="loading">
                <span
                    v-show="loading"
                    class="spinner-border spinner-border-sm"
                ></span>
                <span>Submit</span>
            </q-btn>
        </div>
    </q-form>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            loading: false,
            email: null,
            password: null,
            isPwd: true
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    created() {
        if (this.loggedIn) {
            this.$router.push('/some-view');
        }
    },
    methods: {
        async onSubmit() {
            try {
                this.loading = true;
                if (this.email && this.password) {
                    this.$store
                        .dispatch('auth/login', {
                            email: this.email,
                            password: this.password
                        })
                        .then(() => {
                            this.$router.push('/some-view');
                        })
                        .catch(() => {
                            this.loading = false;
                            this.$q.notify({
                                color: 'red-5',
                                textColor: 'white',
                                icon: 'warning',
                                message:
                                    'Email or password was not correct, please try again'
                            });
                        });
                }
            } catch (error) {
                console.log('Login error', error);
            }
        }
    }
};
</script>
