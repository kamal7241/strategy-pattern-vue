<template>
  <div>
    <InfoCard :title="info?.name" class="text-start">
      <p>weight : {{ info?.weight }}</p>
      <p>color : {{ info?.color }}</p>
      <p>life time : {{ info?.lifeTime }}</p>
      <div>
        <p v-for="(flyInfo, key) in flyBehaviour.flyState" :key="key">
          {{ key + ": " + flyInfo }}
        </p>
      </div>
      <div>
        <p v-for="(swimInfo, key) in swimState" :key="key">
          {{ key + ": " + swimInfo }}
        </p>
      </div>
    </InfoCard>
  </div>
</template>
<script>
import InfoCard from "../InfoCard.vue";
export default {
  name: "DuckInfo",
  props: ["info", "swimState", "flyBehaviour"],
  components: {
    InfoCard,
  },
};
</script>
