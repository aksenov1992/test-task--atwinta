<template>
    <div>
        <CardEmployee/>
    </div>
</template>

<script>
    import CardEmployee from "@/components/CardEmployee";

  export default {
    name: "Employees",
    components: {CardEmployee},
    module: { CardEmployee}
  }
</script>

<style scoped>

</style>