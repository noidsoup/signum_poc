	/***********************
	 * Smooth scroll on a new page
	 * http://stackoverflow.com/questions/9652944/jquery-scroll-to-id-from-different-page
	 ***********************/
	/* var jump=function(e)
	{
		if (e){
		   e.preventDefault();
		   var target = jQuery(this).attr("href");
		}else{
		   var target = location.hash;
		}
		var sticky_height = 73;
		jQuery('html,body').animate(
		{
		   scrollTop: jQuery(target).offset().top - sticky_height
		},800,function()
		{
		   location.hash = target;
		});
	} */



$( document ).ready( function () {

	$( '.scrollTo' ).click( function ( e ) {
		$( 'html, body' ).animate( {
			scrollTop: $( e.currentTarget.hash ).offset().top
		}, 800 );
		location.hash = e.currentTarget.hash;
		return false;
	} );

	/***********************
	 * Slick Slider
	 * https://kenwheeler.github.io/slick/
	 ***********************/
	$( '.carousel-slider' ).slick( {
		prevArrow: '<button type="button" class="control-arrow control-prev"></button>',
		nextArrow: '<button type="button" class="control-arrow control-next"></button>',
		slidesToShow: 3
	} );

	/***********************
	 * Open a FAQ when you jump to it
	 ***********************/
	var hash = location.hash;
	if ( hash ) {
		$( hash ).find( '.faq-answer' ).collapse( 'show' );
	}

	/***********************
	 * Open a FAQ when you jump to it
	 ***********************/
	const checkHash = () => {
		var hash = location.hash;
		if ( hash ) {
			$( hash ).find( '.faq-answer' ).collapse( 'show' );
			$('html, body').animate({scrollTop: '-=40px'}, 800);
		}
	}

	var hash = location.hash;
	if ( hash ) {
		checkHash();
	}

	window.onhashchange = checkHash;

	/***********************
	 * Fix FAQ links in footer
	 ***********************/
	$('.footer .faq-question').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var href = $(this).attr('href');

	});


	/***********************
	 * Open/Close Chart Explorer overlays
	 ***********************/
	$('.overlay-close').on('click', function(e) {
		e.preventDefault();
		$(this).closest('.chart-card-overlay').hide();
		$(this).closest('.tab-pane').find('.chart-card-overlay-open').show();
	});
	$('.chart-card-overlay-open').on('click', function(e) {
		e.preventDefault();
		$(this).hide();
		$(this).closest('.tab-pane').find('.chart-card-overlay').show();
	});

})

	/***********************
	 * Set up Chart.js charts
	 * https://www.chartjs.org/
	 ***********************/

	/* Options for each chart type */
	/* Bar chart options */
	const barChartOptions = {
		maintainAspectRatio: false,
		legend: {
			display: false
		},
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						callback: value => {
							return ( '$' + value.toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, '$1,' ) );
						},
					},
					gridLines: {
						drawBorder: false
					},
				}
			],
			xAxes: [
				{
					gridLines: {
						display: false
					}
				}
			],
		},
		tooltips: {
			callbacks: {
				label: function ( tooltipItem, data ) {
					let tooltipValue = data.datasets[ tooltipItem.datasetIndex ].data[ tooltipItem.index ];
					return ( 'Theoretical Net Gains: ' + '$' + tooltipValue.toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, '$1,' ) );
				}
			}
		},
	};

	/* Doughnut chart options */
	const doughnutChartOptions = {
		maintainAspectRatio: false,
		legend: {
			display: false
		},
		tooltips : {
			callbacks: {
				label: function ( tooltipItem, data ) {
					const availableLabel = data.labels[ 0 ] + ': ';
					const unavailableLabel = data.labels[ 1 ] + ': ';
					const availableData = data.datasets[ 0 ].data[ 0 ].toString();
					const unavailableData = data.datasets[ 0 ].data[ 1 ].toString();

					const percentageAddedAvailable = availableLabel + parseFloat( availableData ).toFixed( 2 ) + '%';
					const percentageAddedUnavailable = unavailableLabel + parseFloat( unavailableData ).toFixed( 2 ) + '%';

					if ( tooltipItem.index === 0 ) {
						return percentageAddedAvailable;
					}
					return percentageAddedUnavailable;
				}
			}
		}
	};

	/* Stacked bar chart options */
	const stackedChartOptions = {
		maintainAspectRatio: false,
		legend: {
			display: false
		},
		responsive: true,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						callback: value => {
							return value.toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, '$1,' );
						},
					},
					gridLines: {
						drawBorder: false
					},
				}
			],
			xAxes: [
				{
					stacked: true,
					gridLines: {
						display: false
					},
				}
			],
		},
		tooltips: {
			callbacks: {
				label: ( tooltipItem, data ) => {
					const tooltipLabel = data.datasets[ tooltipItem.datasetIndex ].label;
					const signalCountValue = data.datasets[ 0 ].data[ tooltipItem.index ];
					const signalVolumeValue = data.datasets[ 1 ].data[ tooltipItem.index ];

					const signalCountDataWithCommas = parseInt( signalCountValue ).toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, '$1,' );

					const signalVolumeDataWithCommas = parseInt( signalVolumeValue ).toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, '$1,' );

					if ( tooltipItem.datasetIndex === 0 ) {
						return tooltipLabel + ': ' + signalCountDataWithCommas;
					}
					return tooltipLabel + ': ' + signalVolumeDataWithCommas;
				}
			}
		},
	};

	/* Line chart options */
	const lineChartOptions = {
		maintainAspectRatio: false,
		legend: {
			display: false
		},
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					},
					gridLines: {
						drawBorder: false
					},
				}
			],
			xAxes: [
				{
					gridLines: {
						display: false
					}
				}
			],
		},
		hover: {
			mode: 'nearest',
			intersect: false,
		},
		tooltips : {
			callbacks: {
				label: function ( tooltipItem, data ) {
					const label = data.datasets[ tooltipItem.datasetIndex ].label + ': ';
					const tooltipValue = data.datasets[ tooltipItem.datasetIndex ].data[ tooltipItem.index ];

					if ( data.datasets[ tooltipItem.datasetIndex ].data.some( value => value > 10 ) ) {
						return ( label + parseInt( tooltipValue ).toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, '$1,' ) );
					}
					return label + parseFloat( tooltipValue ).toFixed( 4 );
				}
			}
		}
	};

	/* Quote Fuse data */
	const dataChartQuoteFuseLine = {
		labels: [ 'Jun 10', '11', '12', '13', '14', '15', '16', ],
		datasets: [
			{
				label: '50%',
				// borderWidth: 0,
				borderColor: '#0DA0A2',
				hoverBorderColor: '#60b1b3',
				borderWidth: 2,
				pointRadius: 0,
				pointHoverRadius: 3,
				pointHoverBackgroundColor: '#60b1b3',
				pointHoverBorderColor: '#60b1b3',
				fill: false,
				lineTension: 0,
				data: [ 24, 36, -26, -10, 28, 11, 12, ],
			}, {
				label: '55%',
				borderColor: '#FC7D8D',
				hoverBorderColor: '#ef9ca5',
				borderWidth: 2,
				pointRadius: 0,
				pointHoverRadius: 3,
				pointHoverBackgroundColor: '#ef9ca5',
				pointHoverBorderColor: '#ef9ca5',
				fill: false,
				lineTension: 0,
				data: [ 22, 34, -24, -8, 27, 10, 11, ],
			}, {
				label: '60%',
				// borderWidth: 0,
				borderColor: '#93CFDC',
				hoverBorderColor: '#b3d8e1',
				borderWidth: 2,
				pointRadius: 0,
				pointHoverRadius: 3,
				pointHoverBackgroundColor: '#b3d8e1',
				pointHoverBorderColor: '#b3d8e1',
				fill: false,
				lineTension: 0,
				data: [ 20, 32, -22, 4, 24, 8, 8, ],
			}, {
				label: '65%',
				// borderWidth: 0,
				borderColor: '#EFB670',
				hoverBorderColor: '#ebc694',
				borderWidth: 2,
				pointRadius: 0,
				pointHoverRadius: 3,
				pointHoverBackgroundColor: '#ebc694',
				pointHoverBorderColor: '#ebc694',
				fill: false,
				lineTension: 0,
				data: [ 18, 30, -20, 4, 22, 5, 7, ],
			}, {
				label: '70%',
				// borderWidth: 0,
				borderColor: '#d8d8d8',
				hoverBorderColor: '#e0e0e0',
				borderWidth: 2,
				pointRadius: 0,
				pointHoverRadius: 3,
				pointHoverBackgroundColor: '#e0e0e0',
				pointHoverBorderColor: '#e0e0e0',
				fill: false,
				lineTension: 0,
				data: [ 16, 28, -18, 4, 21, 5, 6,
				],
			},
		],
	};
	
	/*
	Create the Quote Vector bar chart
	*/

	// Bar chart variables
	let threshold = 30;
	let changeThreshold;
	let quoteFuseLiquidityChart;
	let quoteFuseLiquidityResponse;

	const fetchQuoteVectorData = (el) =>
	fetch(
		`https://www.googleapis.com/storage/v1/b/signum-public-website/o/Quote_Vector_Purse.csv`,
		{
			method: 'GET'
		}
	).then(response => {
		response.json().then(promise => {
			fetch(promise.mediaLink).then(resolved => {
				resolved.text().then(csv => {

					const response = window.Papa.parse(csv, { skipEmptyLines: true, header: true });

					const dates =
						response.data.map(({ Date }) => {
							return moment(Date).format('MMM DD');
						});

					const formattedData =
						response.data.map(obj => {
							const number = obj['50% Net_Total'].replace(/\$|,/g, '');
							return number;
						});

					/* Quote Vector bar chart data options */
					const quoteVectorData = {
						labels: dates.length > 9 ? dates.slice(-10) : dates,
						datasets: [
							{
								label: 'Theoretical Net Gains',
								borderWidth: 0,
								backgroundColor: '#0DA0A2',
								hoverBackgroundColor: '#26aaab',
								data: formattedData.length > 9 ? formattedData.slice(-10) : formattedData,
							}
						]
					};

					var quoteVectorChart = new Chart(el, {
						type: 'bar',
						data: quoteVectorData,
						options: barChartOptions
					});
				});
			});
		});
	});

	var quoteVectorWrapper = document.getElementById('quoteVector');
	if (quoteVectorWrapper) {
		fetchQuoteVectorData(quoteVectorWrapper);
	}

	/* Create the Quote Fuse line chart */
	var quoteFuseWrapper = document.getElementById( 'quoteFuse' );
	if ( quoteFuseWrapper ) {
		var quoteFuseChart = new Chart( quoteFuseWrapper, {
			type: 'line',
			data: dataChartQuoteFuseLine,
			options: lineChartOptions,
		} );
	}

	/*
	Create the Quote Fuse Liquidity doughnut chart
	*/

	// Forms the Quote Vector data
	const formQuoteFuseDoughnutData = (response) => {
		const filteredByMarket =
		response.data.filter(function(field) {
			return field.Market === 'SP500'; // this metric is hardcoded in the original app
		})

		const selectedDate =
			moment(
				filteredByMarket
					.map(array => {
						return moment(new Date(array.Date)).format('YYYY-MM-DD');
					})
					.sort()
					.slice(-1)[0]
			).format('M/D/YYYY');

			const filteredByDate =
				filteredByMarket.filter(filtered => filtered.Date === selectedDate);

			const data = filteredByDate.map(obj => obj[`${threshold}.00%`] || obj[`${threshold}%`]);

			const fiftyMilliseconds =
				filteredByDate.map(obj => {
					return obj['Short Fuse Liquidity (50 Msec)'];
				});

			// Quote Vector data options
			const dataChartQuoteFuseDoughnut = {
				labels: ['Signaled Liquidity', 'Not Signaled Liquidity'],
				datasets: [
					{
						label: fiftyMilliseconds[0],
						borderWidth: 0,
						backgroundColor: [
							'#0DA0A2',
							'#60b1b3',
							'#83c4c6',
							'#aad7d9',
							'#d4ebeb'
						],
						data: [
							parseFloat(data[0]).toFixed(2),
							(100 - parseFloat(data[0])).toFixed(2)
						]
					}
				]
			};

			return dataChartQuoteFuseDoughnut;
	}

	setSignaledLiquidityLabels = (chart) => {
		document.getElementById('intraday-volume').innerHTML = chart.data.datasets[0].label;
		document.getElementById('signaled-liquidity').innerHTML = chart.data.datasets[0].data[0] + '%';
		document.getElementById('not-signaled-liquidity').innerHTML = chart.data.datasets[0].data[1] + '%';
	};

	const fetchQuoteFuseLiquidityData = (el) =>
	fetch(
		`https://www.googleapis.com/storage/v1/b/signum-public-website/o/Quote_Fuse_Liquidity.csv`,
		{
			method: 'GET'
		}
	).then(res => {
		res.json().then(promise => {
			fetch(promise.mediaLink).then(resolved => {
				resolved.text().then(response => {

					quoteFuseLiquidityResponse = window.Papa.parse(response, { skipEmptyLines: true, header: true })
					const data = formQuoteFuseDoughnutData(quoteFuseLiquidityResponse);

					quoteFuseLiquidityChart = new Chart( el, {
						type: 'doughnut',
						data: data,
						options: doughnutChartOptions,
					} );

					setSignaledLiquidityLabels(quoteFuseLiquidityChart);

				});
			});
		});
	});

	// Quote Fuse Bar chart threshold selector
	var quoteFuseLiquidityWrapper = document.getElementById( 'quoteFuseLiquidity' );
	if ( quoteFuseLiquidityWrapper ) {
		fetchQuoteFuseLiquidityData(quoteFuseLiquidityWrapper);
	}

	// Quote Fuse Bar chart threshold selector
	changeThreshold = (val) => {
		threshold = val;
		quoteFuseLiquidityChart.data = formQuoteFuseDoughnutData(quoteFuseLiquidityResponse);

		setSignaledLiquidityLabels(quoteFuseLiquidityChart);
		quoteFuseLiquidityChart.update();
	}

	/* create lamp chart */

	const createElement = (type, classes = [], text = "", attributes = [], id = "") => {
		const el = document.createElement(type);
		el.id = id;
		el.innerText = text;

		classes.forEach((string) => {
			el.classList.add(string);
		})

		if (attributes.length) {
			attributes.forEach((att) => {
				el.setAttribute(att.field, att.value);
			})
		}

		return el;
	}

	// Create row element
	const createRow = (item, index, id) => {

		const button = createElement("button", ["chart-collapse-header", "collapsed"], "", [
			{field: "data-toggle", value: "collapse"},
			{field: "data-target", value: `#item-${id}-${index}` },
		]);

		// create details
		const detailsContainerDiv = createElement("div", ["chart-collapse-details"]);
		const rankDetailDiv = createElement("div", ["chart-collapse-rank"], (item.rank));
		const tickerDetailDiv = createElement("div", ["chart-collapse-detail"], (item.ticker));

		valueDetailText = (parseInt(item.value).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
		const valueDetailDiv = createElement("div", ["chart-collapse-detail"], valueDetailText);

		volumeText = (item['Volume while lit'] || "").toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split('.')[0];
		const volumeDetailDiv = createElement("div", ["chart-collapse-detail"], volumeText);

		const concentrationDetailDiv = createElement("div", ["chart-collapse-detail"], parseInt(item.CR));

		// create collapse arrow for details
		const collapseArrowDiv = createElement("div", ["chart-collapse-arrow"]);
		const collapseArrowIcon = createElement("i", ["far", "fa-angle-up"]);
		collapseArrowDiv.appendChild(collapseArrowIcon);

		// appending the details to the chart-collapse-details div
		detailsContainerDiv.appendChild(rankDetailDiv);
		detailsContainerDiv.appendChild(tickerDetailDiv);
		detailsContainerDiv.appendChild(valueDetailDiv);
		detailsContainerDiv.appendChild(volumeDetailDiv);
		detailsContainerDiv.appendChild(concentrationDetailDiv);
		detailsContainerDiv.appendChild(collapseArrowDiv);

		const progressDiv = createElement("div", ["progress"]);
		const progress1BarDiv = createElement("div", ["progress-bar", "bg-primary"], "", [
			{ field: "role", value: "progressbar"},
			{ field: "aria-valuenow", value: item.value * 0.00011 },
			{ field: "aria-valuemin", value: 0 },
			{ field: "aria-valuemax", value: 100 },
			{ field: "style", value: `width: ${item.value * 0.00011}%` },
		]);

		const progress2BarDiv = createElement("div", ["bg-green-60", "progress-bar"], "", [
			{ field: "role", value: "progressbar"},
			{ field: "aria-valuenow", value: item['Volume while lit'] - item.value * 0.00011  },
			{ field: "aria-valuemin", value: 0 },
			{ field: "aria-valuemax", value: 100 },
			{ field: "style", value: `width: ${(item['Volume while lit'] - item.value) * 0.00011}%` },
		]);

		progressDiv.appendChild(progress1BarDiv);
		progressDiv.appendChild(progress2BarDiv);

		const chartCollapseContentWrapper = createElement("div", ["chart-collapse-content", "collapse"], "", false, (`item-${id}-${index}`) );
		const chartCollapseContentDiv = createElement("div");
		const chartWrapper = createElement("div", ["chart-wrapper"], "", [
			{ field: "style", value: "height:280px; width:900px" },
		]);

		const chartCanvas = createElement("canvas", [], "", [], `chart-${id}-${index}`);
		chartWrapper.appendChild(chartCanvas);

		chartCollapseContentWrapper.appendChild(chartCollapseContentDiv);
		chartCollapseContentDiv.appendChild(chartWrapper);

		// create legend
		const chartLegend = createElement("ul", ["chart-legend"], '');
		//const chartLegend = '<ul class="chart-legend"><li><span class="bg-primary"></span> Signal Count</li><li><span class="bg-green-60"></span> Signal Volume</li></ul>';

		chartCollapseContentDiv.appendChild(chartLegend);
		chartLegend.insertAdjacentHTML('beforeend', '<li><span class="bg-primary"></span> Signal Count</li>');
		chartLegend.insertAdjacentHTML('beforeend', '<li><span class="bg-green-60"></span> Signal Volume</li>');

		// append elements to button
		button.appendChild(detailsContainerDiv);
		button.appendChild(progressDiv);
		button.appendChild(chartCollapseContentWrapper);

		document.getElementById(id).appendChild(button);
	};

  const fetchLiquidityLampRankings = (day, charts, lampHistory) => {

    fetch(
      `https://www.googleapis.com/storage/v1/b/signum-public-website/o/Liquidity_Lamp_Rankings_${day}.csv`,
      {
        method: 'GET'
      }
    ).then((response) => {
      !response.ok
        ? fetchLiquidityLampRankings(
            moment(day)
              .subtract(1, 'd')
							.format('YYYY-MM-DD'),
							charts,
							lampHistory,
          )
        : response.json().then((promise) => {
            fetch(promise.mediaLink).then(resolved => {
              resolved.text().then((csv) => {
								const response = window.Papa.parse(csv, { skipEmptyLines: true, header: true })

								const data =
									response.data.filter(
										({ category }) => category === 'total_ro_ex_volume_ETF' // this metric is hardcoded in the original app
									);

								const sort = name =>
									data.sort((a, b) => {
										if (name.includes('rank')) {
											return a[name] - b[name];
										} else if (name.includes('ticker')) {
											if (a[name] < b[name]) {
												return -1;
											}
											if (a[name] > b[name]) {
												return 1;
											}
											return 0;
										}
										return b[name] - a[name];
									});

									$.each(charts, ( i, chart ) => {

										// conditionally sorting the data via the sort by ratio option on contentful
										const sortbyration = $( chart ).hasClass( "sortbyratio" );
										let name;
										if (sortbyration) {
											name = "CR";
											$(chart).closest('.card-body').find('.chart-collapse-filters #filter-ratio').addClass('active');
										} else {
											name = "rank";
											$(chart).closest('.card-body').find('.chart-collapse-filters #filter-rank').addClass('active');
										}

										const sortedArray = sort(name).map(array => {
											return array;
										})

										sortedArray.forEach((item, index) => {
											createRow(item, index, chart.id);
											const chartCanvas = document.getElementById( `chart-${chart.id}-${index}` );

											createLampChart(chartCanvas, lampHistory, item.ticker);
										})


									});
              });
            });
          });
    });
  };

  const fetchLiquidityLampHistory = (day,) => {
    fetch(
      `https://www.googleapis.com/storage/v1/b/signum-public-website/o/Liquidity_Lamp_History_${day}.csv`,
      {
        method: 'GET'
      }
    ).then(response => {
      !response.ok
        ? fetchLiquidityLampHistory(
            moment(day)
              .subtract(1, 'd')
              .format('YYYY-MM-DD')
          )
        : response.json().then(promise => {
            fetch(promise.mediaLink).then(resolved => {
              resolved.text().then(csv => {
								liquidityLampHistoryResponse = window.Papa.parse(csv, { skipEmptyLines: true, header: true });
              });
            });
          });
    });
	};

	/* Create the Liquidity Lamp stacked bar chart */
	const createLampChart = (chart, lampHistory, ticker) => {
		const liquidityLampDate =
			moment(
				lampHistory.data
					.map(array => {
						return moment(array.date).format('YYYY-MM-DD');
					})
					.sort()
					.slice(-1)[0]
			).format('MMM DD, YYYY');

		const filtered = name =>
    	lampHistory.data
				.filter(data => data.ticker === name)
				.sort((a, b) => moment(a.date) - moment(b.date));

		const dates =
			filtered(ticker).map(array => {
				return moment(array.date).format('MMM DD');
			});

		const volume =
			filtered(ticker).map(array => {
				return parseInt(array['Volume while Lit']);
			});

		const signal =
			filtered(ticker).map(array => {
				return parseInt(array['total_ro_ex_volume']);
			});

		const dateIndex =
			dates.indexOf(moment(new Date(liquidityLampDate)).format('MMM DD'));

		const dataChartLiquidityStacked = {
			labels:
				dateIndex > 9
					? dates.slice(dateIndex + 1 - 10, dateIndex + 1)
					: dates.slice(dateIndex - dateIndex, dateIndex + 1),
			datasets: [
				{
					label: 'Signal Count',
					borderWidth: 0,
					backgroundColor: '#0DA0A2',
					hoverBackgroundColor: '#60b1b3',
					data: dateIndex > 9 ? signal.slice(-10) : signal
				},
				{
					label: 'Signal Volume',
					borderWidth: 0,
					backgroundColor: '#83c4c6',
					hoverBackgroundColor: '#aad7d9',
					data: dateIndex > 9 ? volume.slice(-10) : volume
				}
			]
		};

		new Chart( chart, {
			type: 'bar',
			data: dataChartLiquidityStacked,
			options: stackedChartOptions,
		} );
	}

	var lampCharts = $('*[id^="liquidityLamp-"]');

	//var liquidityLampWrapper = document.getElementById( 'liquidityLamp' );
	if ( lampCharts.length ) {
		const fetchLiquidityLampHistory = day => {
			fetch(
				`https://www.googleapis.com/storage/v1/b/signum-public-website/o/Liquidity_Lamp_History_${day}.csv`,
				{
					method: 'GET'
				}
			).then(response => {
				!response.ok
					? fetchLiquidityLampHistory(
							moment(day)
								.subtract(1, 'd')
								.format('YYYY-MM-DD')
						)
					: response.json().then(promise => {
							fetch(promise.mediaLink).then(resolved => {
								resolved.text().then(csv => {
									const liquidityLampHistoryResponse = window.Papa.parse(csv, { skipEmptyLines: true, header: true });
									fetchLiquidityLampRankings(day, lampCharts, liquidityLampHistoryResponse);
								});
							});
						});
			});
		};

		const currentDay = moment().format('YYYY-MM-DD');
		fetchLiquidityLampHistory(currentDay);
	}
