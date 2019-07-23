<template>
    <div>
        <h1>Flesch Readability Test</h1>
        <div class="text-md-left">
            <p>
                In the Flesch reading-ease test, higher scores indicate material that is easier to read; lower numbers
                mark passages that are more difficult to read.
            </p>
            <p>
                Reader's Digest magazine has a readability index of about 65, Time magazine scores about 52, an average 
                grade six student's written assignment (age of 12) has a readability index of 60–70 (and a reading grade 
                level of six to seven), and the Harvard Law Review has a general readability score in the low 30s. 
                The highest (easiest) readability score possible is 121.22, but only if every sentence consists of only 
                one one-syllable word. "The cat sat on the mat." scores 116. The score does not have a theoretical lower 
                bound; therefore, it is possible to make the score as low as wanted by arbitrarily including words with many 
                syllables. The sentence "This sentence, taken as a reading passage unto itself, is being used to prove a point."
                has a readability of 74.1. The sentence "The Australian platypus is seemingly a hybrid of a mammal and reptilian 
                creature." scores 37.5 as it has 24 syllables and 13 words. While Amazon calculates the text of Moby Dick as 57.9,
                one particularly long sentence about sharks in chapter 64 has a readability score of −146.77. One sentence in 
                the beginning of Swann's Way, by Marcel Proust, has a score of −515.1.
            </p>
            <p>
                The U.S. Department of Defense uses the reading ease test as the standard test of readability for its 
                documents and forms. Florida requires that life insurance policies have a Flesch reading ease score of 
                45 or greater.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FleschReadabilityTest"
}
</script>
