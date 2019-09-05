<template>  
<a-form
    :form="form"
    @submit="handleSubmit"
  >
 <h1>包裹入库</h1>
    <a-form-item
      label="运单号"
      :label-col="{ span:2}"
      :wrapper-col="{ span: 3 }"
    >
      <a-input
        v-decorator="[
          'number',
          {rules: [{ required: true, message: '请输入运单号!' }]}
        ]"
      />
    </a-form-item>

 <a-form-item
      label="收件人"
      :label-col="{ span:2}"
      :wrapper-col="{ span: 3 }"
    >
      <a-input
        v-decorator="[
          'user',
          {rules: [{ required: true, message: '请输入收件人!' }]}
        ]"
      />
    </a-form-item>

 <a-form-item
      label="电话"
      :label-col="{ span:2}"
      :wrapper-col="{ span: 3 }"
    >
      <a-input
        v-decorator="[
          'telephone',
          {rules: [{ required: true, message: '请输入运电话!' }]}
        ]"
       
      />
    </a-form-item>

 <a-form-item
      label="重量"
      :label-col="{ span:2}"
      :wrapper-col="{ span: 3 }"
    >
      <a-input
        v-decorator="[
          'weight',
          {rules: [{ required: true, message: '请输入重量!' }]}
        ]"
      />
    </a-form-item>


    <a-button
            type="primary"
            html-type="submit"
          >
            提交
          </a-button>
          <a-button
            :style="{ marginLeft: '8px' }"
            @click="handleReset"
          >
            取消
          </a-button>
  </a-form>
</template>


<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        this.$store.dispatch("postPackages", values);
        if (!err) {
  window.console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>

<style scoped>
</style>