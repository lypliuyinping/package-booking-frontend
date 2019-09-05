<template>
<div id="package">
      <h1>预约取件</h1>
<a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      label="运单号"
      :label-col="{ span:2}"
      :wrapper-col="{ span: 3 }"
    >
      <a-input
        v-decorator="[
          '运单号',
          {rules: [{ required: true, message: '请输入运单号!' }]}
        ]"
      />
    </a-form-item>

 <a-form-item
      label="取件时间"
      :label-col="{ span:2}"
      :wrapper-col="{ span: 3 }"
    >
      <a-input
        v-decorator="[
          '收件人',
          {rules: [{ required: true, message: '请输入取件时间!' }]}
        ]"
      />
    </a-form-item>

    <a-button
            type="primary"
            html-type="submit"
          >
            预约
          </a-button>
          <a-button
            :style="{ marginLeft: '8px' }"
            @click="handleReset"
          >
            取消
          </a-button>
  </a-form>
    </div>
</template>




<style scoped>
#package {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>