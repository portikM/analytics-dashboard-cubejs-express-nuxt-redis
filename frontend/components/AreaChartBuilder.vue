<template>
  <div class="chart-renderer">
    <area-chart
      :legend="false"
      :messages="{empty: 'Sorry, there is no data available at this time.'}"
      :data="series"
    ></area-chart>
  </div>
</template>

<script>
export default {
  name: "AreaChartBuilder",
  props: {
    resultSet: {
      type: Object,
      required: true
    }
  },
  computed: {
    series() {
      console.log(this.resultSet);
      const seriesNames = this.resultSet.seriesNames();
      const pivot = this.resultSet.chartPivot();
      const series = [];
      seriesNames.forEach(e => {
        const data = pivot.map(p => [p.x, p[e.key]]);
        series.push({ name: e.key, data });
      });
      return series;
    }
  }
};
</script>