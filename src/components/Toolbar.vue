<template>
    <v-toolbar app>
        <v-toolbar-title>
            <router-link 
                to='/'
                tag="span"
                style="cursor: pointer"
                exact
            >
                Text Readability Calculator
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tool-bar-items class="hidden-sm-and-down">
            <v-btn flat href="#/ReadabilityTest">
            Readability
            </v-btn>
            <v-btn flat href="#/FleschReadabilityTest">
            Flesch Readability
            </v-btn>
            <v-btn flat href="#/FleschKincaidTest">
            Flesch-Kincaid
            </v-btn>
        </v-tool-bar-items>
    </v-toolbar>
</template>

<script>

export default {
    name:"Toolbar"
}
</script>
