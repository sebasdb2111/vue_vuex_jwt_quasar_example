<template>
    <q-list>
        <q-item-label header>Other users</q-item-label>
        <div>
            <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
                <q-item-section avatar>
                    <q-icon name="person" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Pepa</q-item-label>
                    <q-item-label caption>quasar.dev</q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-icon name="info" />
                </q-item-section>
            </q-item>
        </div>

        <q-item
            clickable
            tag="a"
            target="_blank"
            href="https://github.com/quasarframework/"
        >
            <q-item-section avatar>
                <q-icon name="person" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Paca</q-item-label>
                <q-item-label caption>github.com/quasarframework</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-icon name="info" />
            </q-item-section>
        </q-item>
        <q-item
            clickable
            tag="a"
            target="_blank"
            href="https://chat.quasar.dev"
        >
            <q-item-section avatar>
                <q-icon name="person" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Ataulfo</q-item-label>
                <q-item-label caption>chat.quasar.dev</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-icon name="info" />
            </q-item-section>
        </q-item>
        <q-item
            clickable
            tag="a"
            target="_blank"
            href="https://forum.quasar.dev"
        >
            <q-item-section avatar>
                <q-icon name="person" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Eustaquio</q-item-label>
                <q-item-label caption>forum.quasar.dev</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-icon name="info" />
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script>
export default {
    name: 'QDrawerList'
};
</script>

<style scoped></style>
