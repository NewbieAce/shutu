$(function() {
				$('#market_pic').highcharts({
					chart: {
						type: 'line'
					},
					title: {
						text: '市场走向图'
					},
					subtitle: {
						text: ''
					},
					xAxis: {
						categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
					},
					yAxis: {
						title: {
							text: '市场均价(元/千克)'
						}
					},
					tooltip: {
						enabled: false,
						formatter: function() {
							return '<b>' + this.series.name + '</b><br/>' + this.x + ': ' + this.y + '°C';
						}
					},
					plotOptions: {
						line: {
							dataLabels: {
								enabled: true
							},
							enableMouseTracking: false
						}
					},
					series: [{
						name: '去年青椒价格走势',
						data: [2.0, 1.9, 1.5, 2.5, 1.4, 2.5, 2.2, 2.5, 3.3, 1.3, 1.9, 1.6]
					}, {
						name: '今年青椒价格走势',
						data: [2.9, 1.2, 2.7, 2.5, 1.9, 1.2, 1.0, 1.6, 1.2, 1.3, 2.6, 2.8]
					}]
				});
			});