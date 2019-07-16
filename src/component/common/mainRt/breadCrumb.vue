<template>
  <div class="breadCrumbBox">
    <Breadcrumb>
      <Breadcrumb-item>Home</Breadcrumb-item>
      <Breadcrumb-item>Components</Breadcrumb-item>
      <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'breadCrumbBox',
    data(){
      return {}
    },
  }
</script>

<style lang="less" scoped>
  .breadCrumbBox {
    width: 100%;
    padding: 20px 0;
    border-bottom:1px solid #ccc;
  }

</style>
