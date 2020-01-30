<template>
    <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
            color="teal"
            outlined
            type="text"
            v-model="username"
            label="Username"
            lazy-rules
            :rules="[
                val => (val && val.length > 0) || 'Please type your username'
            ]"
        />
        <q-input
            color="teal"
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
            color="teal"
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
        <q-input
            color="teal"
            outlined
            v-model="retypePassword"
            label="Retype Password"
            lazy-rules
            :rules="[
                val =>
                    (val !== null && val !== '') ||
                    'Please retype your password'
            ]"
            :type="isRePwd ? 'password' : 'text'"
        >
            <template v-slot:append>
                <q-icon
                    :name="isRePwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isRePwd = !isRePwd"
                />
            </template>
        </q-input>
        <q-input
            color="teal"
            outlined
            type="text"
            v-model="firstName"
            label="First name"
            lazy-rules
            :rules="[
                val => (val && val.length > 0) || 'Please type your first name'
            ]"
        />
        <q-input
            color="teal"
            outlined
            type="text"
            v-model="lastName"
            label="Last name"
            lazy-rules
            :rules="[
                val => (val && val.length > 0) || 'Please type your last name'
            ]"
        />
        <q-input
            outlined
            color="teal"
            v-model="dateBirth"
            label="Date of birth"
            mask="date"
            :rules="['date']"
        >
            <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                        class="cursor-pointer"
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                    >
                        <q-date
                            color="teal"
                            :first-day-of-week="1"
                            v-model="dateBirth"
                            @input="() => $refs.qDateProxy.hide()"
                        />
                    </q-popup-proxy>
                </q-icon>
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
import { addEighteenYear, isoToday } from '../../servicies/date-utils';

export default {
    name: 'Signup',
    data() {
        return {
            loading: false,
            username: null,
            email: null,
            password: null,
            retypePassword: null,
            isPwd: true,
            isRePwd: true,
            firstName: null,
            lastName: null,
            dateBirth: null
        };
    },
    methods: {
        checkAdultUser() {
            const adultUser = isoToday() > addEighteenYear(this.dateBirth);

            if (!adultUser) {
                this.$q.notify({
                    color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: 'You are not of legal age to use our services'
                });
            }

            return adultUser;
        },
        checkSamePassword() {
            const correctPassword = this.password === this.retypePassword;

            if (!correctPassword) {
                this.$q.notify({
                    color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: 'Passwords are not equal'
                });
            }

            return correctPassword;
        },
        async onSubmit() {
            try {
                const adultUser = this.checkAdultUser();
                const correctPassword = this.checkSamePassword();
                if (
                    adultUser &&
                    correctPassword &&
                    null !== this.username &&
                    null !== this.firstName &&
                    null !== this.lastName &&
                    null !== this.email
                ) {
                    this.$store
                        .dispatch('auth/signup', {
                            username: this.username,
                            email: this.email,
                            password: this.password,
                            firstName: this.firstName,
                            lastName: this.lastName,
                            dateBirth: this.dateBirth
                        })
                        .then(() => {
                            this.$q.notify({
                                color: 'teal',
                                textColor: 'white',
                                icon: 'checkmark',
                                message: 'Account created, please login!'
                            });
                            setTimeout(() => {
                                this.$router.go();
                            }, 2000);

                            this.loading = false;
                        })
                        .catch(() => {
                            this.loading = false;
                            this.$q.notify({
                                color: 'red-5',
                                textColor: 'white',
                                icon: 'checkmark',
                                message: 'Make sure your data is correct'
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
