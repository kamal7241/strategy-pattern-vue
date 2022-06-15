<template>
  <div class="mb-5">
    <div class="row">
      <div class="col-3">
        <div class="text-start h3">
          <label class="form-label mb-3" for="">Select Type : </label>
          <select class="form-select" v-model="type">
            <option :value="TYPES.redHead">RedHead</option>
            <option :value="TYPES.Mallard">Mallard</option>
            <option :value="TYPES.white">White</option>
            <option :value="TYPES.decoy">Decoy</option>
            <option :value="TYPES.rubber">Rubber</option>
          </select>
        </div>
      </div>
      <div class="col-9">
        <GenericCard :type="type" :width="500" />
      </div>
    </div>
  </div>
</template>

<script>
import { TYPES } from "../enums";
import GenericCard from "../components/GenericDuck.vue";

export default {
  name: "Home",
  components: {
    GenericCard,
  },
  data() {
    return {
      type: TYPES.redHead,
    };
  },
  computed: {
    TYPES() {
      return TYPES;
    },
  },
};
</script>
