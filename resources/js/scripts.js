$(document).ready(function () {
    /************************************
     * Experience Animations per row
     ************************************/
    const exp_wp_rise_left = '.js--wp-exp-rise-col-left'
    const exp_wp_rise_right = '.js--wp-exp-rise-col-right'
    $(exp_wp_rise_left).css('opacity', 0)
    $(exp_wp_rise_left).waypoint(function (direction) {
        $(exp_wp_rise_left).addClass('animate__animated animate__fadeInLeft')
        $(exp_wp_rise_left).css('opacity', 1)
    }, {
        offset: '80%'
    })
    $(exp_wp_rise_right).css('opacity', 0)
    $(exp_wp_rise_right).waypoint(function (direction) {
        $(exp_wp_rise_right).addClass('animate__animated animate__fadeInRight')
        $(exp_wp_rise_right).css('opacity', 1)
    }, {
        offset: '80%'
    })

    $('.js--wp-exp-iron3-col-left').css('opacity', 0)
    $('.js--wp-exp-iron3-col-left').waypoint(function (direction) {
        $('.js--wp-exp-iron3-col-left').addClass('animate__animated animate__fadeInLeft')
        $('.js--wp-exp-iron3-col-left').css('opacity', 1)
    }, {
        offset: '80%'
    })
    $('.js--wp-exp-iron3-col-right').css('opacity', 0)
    $('.js--wp-exp-iron3-col-right').waypoint(function (direction) {
        $('.js--wp-exp-iron3-col-right').addClass('animate__animated animate__fadeInRight')
        $('.js--wp-exp-iron3-col-right').css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/
    $('.js--wp-exp-iron2-col-left').css('opacity', 0)
    $('.js--wp-exp-iron2-col-left').waypoint(function (direction) {
        $('.js--wp-exp-iron2-col-left').addClass('animate__animated animate__fadeInLeft')
        $('.js--wp-exp-iron2-col-left').css('opacity', 1)
    }, {
        offset: '80%'
    })
    $('.js--wp-exp-iron2-col-right').css('opacity', 0)
    $('.js--wp-exp-iron2-col-right').waypoint(function (direction) {
        $('.js--wp-exp-iron2-col-right').addClass('animate__animated animate__fadeInRight')
        $('.js--wp-exp-iron2-col-right').css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/
    $('.js--wp-exp-iron1-col-left').css('opacity', 0)
    $('.js--wp-exp-iron1-col-left').waypoint(function (direction) {
        $('.js--wp-exp-iron1-col-left').addClass('animate__animated animate__fadeInLeft')
        $('.js--wp-exp-iron1-col-left').css('opacity', 1)
    }, {
        offset: '80%'
    })
    $('.js--wp-exp-iron1-col-right').css('opacity', 0)
    $('.js--wp-exp-iron1-col-right').waypoint(function (direction) {
        $('.js--wp-exp-iron1-col-right').addClass('animate__animated animate__fadeInRight')
        $('.js--wp-exp-iron1-col-right').css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/
    $('.js--wp-exp-harari-col-left').css('opacity', 0)
    $('.js--wp-exp-harari-col-left').waypoint(function (direction) {
        $('.js--wp-exp-harari-col-left').addClass('animate__animated animate__fadeInLeft')
        $('.js--wp-exp-harari-col-left-col-left').css('opacity', 1)
    }, {
        offset: '80%'
    })
    $('.js--wp-exp-harari-col-right').css('opacity', 0)
    $('.js--wp-exp-harari-col-right').waypoint(function (direction) {
        $('.js--wp-exp-harari-col-right').addClass('animate__animated animate__fadeInRight')
        $('.js--wp-exp-harari-col-right').css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/
    $('.js--wp-exp-quest-left').css('opacity', 0)
    $('.js--wp-exp-quest-left').waypoint(function (direction) {
        $('.js--wp-exp-quest-left').addClass('animate__animated animate__fadeInLeft')
        $('.js--wp-exp-quest-left').css('opacity', 1)
    }, {
        offset: '80%'
    })
    $('.js--wp-exp-quest-right').css('opacity', 0)
    $('.js--wp-exp-quest-right').waypoint(function (direction) {
        $('.js--wp-exp-quest-right').addClass('animate__animated animate__fadeInRight')
        $('.js--wp-exp-quest-right').css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/

    /************************************
     * Education Animations per row
     ************************************/
    $('.js--wp-edu-uni-left').css('opacity', 0)
    $('.js--wp-edu-uni-left').waypoint(function (direction) {
        $('.js--wp-edu-uni-left').addClass('animate__animated animate__fadeInLeft')
        $('.js--wp-edu-uni-left').css('opacity', 1)
    }, {
        offset: '80%'
    })
    $('.js--wp-edu-uni-right').css('opacity', 0)
    $('.js--wp-edu-uni-right').waypoint(function (direction) {
        $('.js--wp-edu-uni-right').addClass('animate__animated animate__fadeInRight')
        $('.js--wp-edu-uni-right').css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/
    $('.js--wp-edu-ta-left').css('opacity', 0)
    $('.js--wp-edu-ta-left').waypoint(function (direction) {
        $('.js--wp-edu-ta-left').addClass('animate__animated animate__fadeInLeft')
        $('.js--wp-edu-ta-left').css('opacity', 1)
    }, {
        offset: '80%'
    })
    $('.js--wp-edu-ta-right').css('opacity', 0)
    $('.js--wp-edu-ta-right').waypoint(function (direction) {
        $('.js--wp-edu-ta-right').addClass('animate__animated animate__fadeInRight')
        $('.js--wp-edu-ta-right').css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/

    /************************************
     * Skills Animations per row
     ************************************/
    const skills_waypoint_row_1 = '.js--wp-skills-r-1'
    const skills_waypoint_row_2 = '.js--wp-skills-r-2'
    const skills_waypoint_row_3 = '.js--wp-skills-r-3'

    $(skills_waypoint_row_1).css('opacity', 0)
    $(skills_waypoint_row_1).waypoint(function (direction) {
        $(skills_waypoint_row_1).addClass('animate__bounceIn')
        $(skills_waypoint_row_1).animate({opacity: 1})
        console.log(direction)
        if (direction === 'up') {
            $(skills_waypoint_row_1).removeClass('animate__bounceIn')
            $(skills_waypoint_row_1).width()
        }
    }, {offset: '80%'})

    $(skills_waypoint_row_2).css('opacity', 0)
    $(skills_waypoint_row_2).waypoint(function (direction) {
        $(skills_waypoint_row_2).addClass('animate__bounceIn')
        $(skills_waypoint_row_2).animate({opacity: 1})
        if (direction === 'up') {
            $(skills_waypoint_row_2).removeClass('animate__bounceIn')
            $(skills_waypoint_row_2).width()
        }
    }, {offset: '80%'})

    $(skills_waypoint_row_3).css('opacity', 0)
    $(skills_waypoint_row_3).waypoint(function (direction) {
        $(skills_waypoint_row_3).addClass('animate__bounceIn')
        $(skills_waypoint_row_3).animate({opacity: 1})
        if (direction === 'up') {
            $(skills_waypoint_row_3).removeClass('animate__bounceIn')
            $(skills_waypoint_row_3).width()
        }
    }, {offset: '80%'})

    /************************************
     * Certifications Animations per row
     ************************************/
    const cert_waypoint_aws_left = '.js--wp-cert-aws-left'
    const cert_waypoint_aws_right = '.js--wp-cert-aws-right'
    $(cert_waypoint_aws_left).css('opacity', 0)
    $(cert_waypoint_aws_left).waypoint(function (direction) {
        $(cert_waypoint_aws_left).addClass('animate__animated animate__fadeInLeft')
        $(cert_waypoint_aws_left).css('opacity', 1)
    }, {
        offset: '80%'
    })
    $(cert_waypoint_aws_right).css('opacity', 0)
    $(cert_waypoint_aws_right).waypoint(function (direction) {
        $(cert_waypoint_aws_right).addClass('animate__animated animate__fadeInRight')
        $(cert_waypoint_aws_right).css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/
    const cert_waypoint_jira_left = '.js--wp-cert-jira-left'
    const cert_waypoint_jira_right = '.js--wp-cert-jira-right'
    $(cert_waypoint_jira_left).css('opacity', 0)
    $(cert_waypoint_jira_left).waypoint(function (direction) {
        $(cert_waypoint_jira_left).addClass('animate__animated animate__fadeInLeft')
        $(cert_waypoint_jira_left).css('opacity', 1)
    }, {
        offset: '80%'
    })
    $(cert_waypoint_jira_right).css('opacity', 0)
    $(cert_waypoint_jira_right).waypoint(function (direction) {
        $(cert_waypoint_jira_right).addClass('animate__animated animate__fadeInRight')
        $(cert_waypoint_jira_right).css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/

    /************************************
     * Service and Leadership Animations per row
     ************************************/
    const ser_waypoint_ajc_il_left = '.js--wp-ser-ajc-il-left'
    const ser_waypoint_ajc_il_right = '.js--wp-ser-ajc-il-right'
    $(ser_waypoint_ajc_il_left).css('opacity', 0)
    $(ser_waypoint_ajc_il_left).waypoint(function (direction) {
        $(ser_waypoint_ajc_il_left).addClass('animate__animated animate__fadeInLeft')
        $(ser_waypoint_ajc_il_left).css('opacity', 1)
    }, {
        offset: '80%'
    })
    $(ser_waypoint_ajc_il_right).css('opacity', 0)
    $(ser_waypoint_ajc_il_right).waypoint(function (direction) {
        $(ser_waypoint_ajc_il_right).addClass('animate__animated animate__fadeInRight')
        $(ser_waypoint_ajc_il_right).css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/
    const ser_waypoint_idf_left = '.js--wp-ser-idf-left'
    const ser_waypoint_idf_right = '.js--wp-ser-idf-right'
    $(ser_waypoint_idf_left).css('opacity', 0)
    $(ser_waypoint_idf_left).waypoint(function (direction) {
        $(ser_waypoint_idf_left).addClass('animate__animated animate__fadeInLeft')
        $(ser_waypoint_idf_left).css('opacity', 1)
    }, {
        offset: '80%'
    })
    $(ser_waypoint_idf_right).css('opacity', 0)
    $(ser_waypoint_idf_right).waypoint(function (direction) {
        $(ser_waypoint_idf_right).addClass('animate__animated animate__fadeInRight')
        $(ser_waypoint_idf_right).css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/
    const ser_waypoint_capri_left = '.js--wp-ser-capri-left'
    const ser_waypoint_capri_right = '.js--wp-ser-capri-right'
    $(ser_waypoint_capri_left).css('opacity', 0)
    $(ser_waypoint_capri_left).waypoint(function (direction) {
        $(ser_waypoint_capri_left).addClass('animate__animated animate__fadeInLeft')
        $(ser_waypoint_capri_left).css('opacity', 1)
    }, {
        offset: '80%'
    })
    $(ser_waypoint_capri_right).css('opacity', 0)
    $(ser_waypoint_capri_right).waypoint(function (direction) {
        $(ser_waypoint_capri_right).addClass('animate__animated animate__fadeInRight')
        $(ser_waypoint_capri_right).css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/

    const ser_waypoint_ajc_left = '.js--wp-ser-ajc-left'
    const ser_waypoint_ajc_right = '.js--wp-ser-ajc-right'
    $(ser_waypoint_ajc_left).css('opacity', 0)
    $(ser_waypoint_ajc_left).waypoint(function (direction) {
        $(ser_waypoint_ajc_left).addClass('animate__animated animate__fadeInLeft')
        $(ser_waypoint_ajc_left).css('opacity', 1)
    }, {
        offset: '80%'
    })
    $(ser_waypoint_ajc_right).css('opacity', 0)
    $(ser_waypoint_ajc_right).waypoint(function (direction) {
        $(ser_waypoint_ajc_right).addClass('animate__animated animate__fadeInRight')
        $(ser_waypoint_ajc_right).css('opacity', 1)
    }, {
        offset: '80%'
    })

    /************************************
     * Honors and Awards Animations per row
     ************************************/
    const hon_waypoint_ta1_left = '.js--wp-hon-ta1-left'
    const hon_waypoint_ta1_right = '.js--wp-hon-ta1-right'
    $(hon_waypoint_ta1_left).css('opacity', 0)
    $(hon_waypoint_ta1_left).waypoint(function (direction) {
        $(hon_waypoint_ta1_left).addClass('animate__animated animate__fadeInLeft')
        $(hon_waypoint_ta1_left).css('opacity', 1)
    }, {
        offset: '80%'
    })
    $(hon_waypoint_ta1_right).css('opacity', 0)
    $(hon_waypoint_ta1_right).waypoint(function (direction) {
        $(hon_waypoint_ta1_right).addClass('animate__animated animate__fadeInRight')
        $(hon_waypoint_ta1_right).css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/
    const hon_waypoint_ta2_left = '.js--wp-hon-ta2-left'
    const hon_waypoint_ta2_right = '.js--wp-hon-ta2-right'
    $(hon_waypoint_ta2_left).css('opacity', 0)
    $(hon_waypoint_ta2_left).waypoint(function (direction) {
        $(hon_waypoint_ta2_left).addClass('animate__animated animate__fadeInLeft')
        $(hon_waypoint_ta2_left).css('opacity', 1)
    }, {
        offset: '80%'
    })
    $(hon_waypoint_ta2_right).css('opacity', 0)
    $(hon_waypoint_ta2_right).waypoint(function (direction) {
        $(hon_waypoint_ta2_right).addClass('animate__animated animate__fadeInRight')
        $(hon_waypoint_ta2_right).css('opacity', 1)
    }, {
        offset: '80%'
    })
    /**************************************************************************************************************/

    /* Mobile Navigation */
    $('.js--nav-icon').click(function () {
        const nav = $('.js--main-nav')
        nav.slideToggle(200)
    })
})