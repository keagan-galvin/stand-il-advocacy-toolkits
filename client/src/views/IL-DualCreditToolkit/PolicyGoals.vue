<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">
        SET YOUR POLICY GOALS
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna
        mi, ullamcorper vitae pellentesque in, pulvinar vitae lectus. In
        tincidunt felis quis massa luctus, at posuere velit blandit. Donec erat
        est, dapibus sed pellentesque id, mattis at magna. Vivamus venenatis
        vitae quam id commodo. Nullam vel dignissim ipsum. Nam ornare sodales
        nibh sit amet tempor. Nunc at hendrerit libero, quis rhoncus diam.
        Vestibulum a quam nec augue vulputate consequat.
      </p>
      <v-row align="center" class="mt-8">
        <v-col cols="12">
          <v-select
            :items="[
              'Parent',
              'Student',
              'Teacher',
              'School Administrator',
              'Community College Staff',
            ]"
            label="What role best represents you?"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-select
            :items="[
              'Start a new dual credit program',
              'Introduce a new course to an existing dual credit program',
              'Expand eligibility criteria for an existing dual credit program',
              'Lower the costs of dual credit courses for schools and students',
              'Become licensed to teach dual credit',
            ]"
            label="What are your policy goals?"
          ></v-select>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>
