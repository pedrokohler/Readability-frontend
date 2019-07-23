<template>
    <div>
        <h1>Readability Test</h1>
        <div class="text-md-left">
            <p>
                The automated readability index (ARI) is a readability test for English texts,
                designed to gauge the understandability of a text. Like the Flesch–Kincaid grade level,
                Gunning fog index, SMOG index, Fry readability formula, and Coleman–Liau index,
                it produces an approximate representation of the US grade level needed to comprehend the text.
            </p>
            <p>
                As a rough guide, US grade level 1 corresponds to ages 6–8. Reading level grade 8 corresponds 
                to the typical reading level of a 14-year-old US child. Grade 12, the highest US secondary-school 
                grade before college, corresponds to the reading level of a 17-year-old.
            </p>
            <p>
                Unlike the other indices, the ARI, along with the Coleman–Liau, relies on a factor of characters 
                per word, instead of the usual syllables per word. Although opinion varies on its accuracy as 
                compared to the syllables/word and complex words indices, characters/word is often faster to 
                calculate, as the number of characters is more readily and accurately counted by computer programs 
                than syllables. In fact, this index was designed for real-time monitoring of readability on electric 
                typewriters.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReadabilityTest"
}
</script>
