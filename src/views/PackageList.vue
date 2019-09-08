<template>
  <div>
  <PackageHead/>
    <a-table bordered 
     rowKey="number"
    :pagination="pagination"
    :dataSource="data"
    :loading="loading"
    :columns="columns">
      <span slot="action" slot-scope="text, record">
        <a-button type="primary" @click="handlePackageState(record)">确认收货</a-button>
     </span>   
    </a-table>
  </div>
</template>
<script>
import PackageHead from "./PackageHead.vue";
const columns = [
  {
    title: "运单号",
    dataIndex: "number",
    sorter: true,
    width: "20%"
  },
  {
    title: "收件人",
    dataIndex: "user",
    width: "20%"
  },
  {
    title: "电话",
    dataIndex: "telephone"
  },
  {
    title: "状态",
    dataIndex: "state"
  },
  {
    title: "预约时间",
    dataIndex: "dateTime"
  },
  {
    title: "确认收货",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];
export default {
  components: {
    PackageHead
  },
  data() {
    return {
      columns,
      pagination: {
        defaultPageSize: 5,
        showTotal: total => `共 ${total} 条数据`,
        showSizeChanger: true,
        pageSizeOptions: ["5", "10", "15", "20"],
        onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
      }
    };
  },
  computed: {
    data: function() {
      return this.$store.getters.packagesListFilter;
      window.console.log(this.data);
    },
    loading: function() {
      return this.$store.state.loading;
    }
  },
  mounted() {
    this.$store.dispatch("getPackages");
  },
  methods: {
    handlePackageState: function(event) {
      this.$store.dispatch("putPackages", event);
    }
  }
};
</script>
<style>
</style>