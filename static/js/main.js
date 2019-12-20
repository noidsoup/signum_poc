$(document).ready( function() {
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

	$('.scrollTo').click(function(e){
		$('html, body').animate({
				scrollTop: $( e.currentTarget.hash ).offset().top
		}, 800);
		location.hash = e.currentTarget.hash;
		return false;
	});

	/***********************
	 * Slick Slider
	 * https://kenwheeler.github.io/slick/
	 ***********************/
	$('.carousel-slider').slick({
		prevArrow: '<button type="button" class="control-arrow control-prev"></button>',
		nextArrow: '<button type="button" class="control-arrow control-next"></button>',
		slidesToShow: 3,
	});


	/***********************
	 * Open an FAQ when you jump to it
	 ***********************/
	var hash = location.hash;
	if (hash) {
		$(hash).find('.faq-answer').collapse('show');
	}

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
							return (
								'$' + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
							);
						}
					},
					gridLines: {
						drawBorder: false
					}
				}
			],
			xAxes: [
				{
					gridLines: {
						display: false
					}
				}
			]
		}
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
					}
				}
			],
			xAxes: [
				{
					gridLines: {
						display: false
					}
				}
			]
		},
		hover: {
			mode: 'nearest',
			intersect: false
		}
	};



	/* Doughnut chart options */
	const doughnutChartOptions = {
		maintainAspectRatio: false,
		legend: {
			display: false
		}
	};


	/* Quote Fuse data */
	const dataChartQuoteFuseLine = {
		labels: ['Jun 10', '11', '12', '13', '14', '15', '16'],
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
				data: [24, 36, -26, -10, 28, 11, 12]
			},
			{
				label: '55%',
				// borderWidth: 0,
				borderColor: '#FC7D8D',
				hoverBorderColor: '#ef9ca5',
				borderWidth: 2,
				pointRadius: 0,
				pointHoverRadius: 3,
				pointHoverBackgroundColor: '#ef9ca5',
				pointHoverBorderColor: '#ef9ca5',
				fill: false,
				lineTension: 0,
				data: [22, 34, -24, -8, 27, 10, 11]
			},
			{
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
				data: [20, 32, -22, 4, 24, 8, 8]
			},
			{
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
				data: [18, 30, -20, 4, 22, 5, 7]
			},
			{
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
				data: [16, 28, -18, 4, 21, 5, 6]
			}
		]
	};

	/* Quote Fuse Liquidity data */
	const dataChartQuoteFuseDoughnut = {
		labels: ['Available', 'Unavailable', '60%', '65%', '70%'],
		datasets: [
			{
				label: 'Volume Before Price Shift',
				borderWidth: 0,
				backgroundColor: ['#0DA0A2', '#83c4c6'],
				data: [47.5, 52.5]
			}
		]
	};

	/* Create the Quote Vector bar chart */
	var quoteVectorWrapper = document.getElementById('quoteVector');
	if (quoteVectorWrapper) {
		const fetchQuoteVectorPurse = () =>
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

						/* Quote Vector bar chart data */
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

						var quoteVectorChart = new Chart(quoteVectorWrapper, {
							type: 'bar',
							data: quoteVectorData,
							options: barChartOptions
						});

					});
				});
			});
		});

		fetchQuoteVectorPurse();

	}

	/* Create the Quote Fuse line chart */
	var quoteFuseWrapper = document.getElementById('quoteFuse');
	if (quoteFuseWrapper) {
		var quoteFuseChart = new Chart(quoteFuseWrapper, {
			type: 'line',
			data: dataChartQuoteFuseLine,
			options: lineChartOptions
		});
	}

	/* Create the Quote Fuse Liquidity doughnut chart */
	var quoteFuseLiquidityWrapper = document.getElementById('quoteFuseLiquidity');
	if (quoteFuseLiquidityWrapper) {
		var quoteFuseLiquidityChart = new Chart(quoteFuseLiquidityWrapper, {
			type: 'doughnut',
			data: dataChartQuoteFuseDoughnut,
			options: doughnutChartOptions
		});
	}
});
