$( function () {

	$( '.slider__inner' ).slick( {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true,
		centerPadding: '60px',
		responsive: [
			{
				breakpoint: 1920,
				settings: {
					autoplay: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,

				}
			},
			{
				breakpoint: 1335,
				settings: {
					autoplay: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 2,
					slidesToScroll: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

		]
	} );


	$( '.team__inner' ).slick( {
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1355,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1035,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 690,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

		]
	} );

	$( '.partners__inner' ).slick( {
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		centerMode: true,
		centerPadding: '60px',
		responsive: [
			{
				breakpoint: 1355,
				settings: {
					autoplay: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,

				}
			},
			{
				breakpoint: 1035,
				settings: {
					autoplay: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 690,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

		]
	} );

} );