<template>
    <div class="container">
        <CardEmployee/>
        <Pages/>
    </div>
</template>

<script>
    import CardEmployee from "@/components/CardEmployee";
    import Pages from "@/components/Pages";

  export default {
    name: "Employees",
    components: {CardEmployee, Pages},
    module: { CardEmployee, Pages }
  }
</script>

<style scoped>

</style>