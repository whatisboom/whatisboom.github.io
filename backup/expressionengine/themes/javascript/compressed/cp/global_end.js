/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
 * @copyright	Copyright (c) 2003 - 2012, EllisLab, Inc.
 * @license		http://ellislab.com/expressionengine/user-guide/license.html
 * @link		http://ellislab.com
 * @since		Version 2.0
 * @filesource
 */

$("table").each(function(){var a;$(this).data("table_config")&&(a=$(this).data("table_config"),$.isPlainObject(a)||(a=$.parseJSON(a)),$(this).table(a));jQuery().toggle_all&&$(this).toggle_all()});
$(function(){function a(){var a=EE.SESS_TIMEOUT-6E4,b=EE.XID_TIMEOUT-6E4,g=a<b?a:b,f=!1,d,c;c=function(){$.ajax({type:"POST",dataType:"json",url:EE.BASE+"&C=login&M=refresh_xid",success:function(a){$("input[name='XID']").val(a.xid);EE.XID=a.xid;setTimeout(c,b)}})};d=function(){var a='<form><div id="logOutWarning" style="text-align:center"><p>'+EE.lang.session_expiring+'</p><label for="username">'+EE.lang.username+'</label>: <input type="text" id="log_backin_username" name="username" value="" style="width:100px" size="35" dir="ltr" id="username" maxlength="50"  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label for="password">'+
EE.lang.password+'</label>: <input class="field" id="log_backin_password" type="password" name="password" value="" style="width:100px" size="32" dir="ltr" id="password" maxlength="32"  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" id="submit" name="submit" value="'+EE.lang.login+'" class="submit" /><span id="logInSpinner"></span></div></form>',e;if(!0===f)return i(f),!1;setTimeout(i,g);$.ee_notice(a,{type:"custom",open:!0,close_on_click:!1});e=$("#logOutWarning");e.find("#log_backin_username").focus();
e.find("input#submit").click(function(){var a=e.find("input#log_backin_username").val(),b=e.find("input#log_backin_password").val(),c=$(this),h=e.find("span#logInSpinner");c.hide();h.html('<img src="'+EE.PATH_CP_GBL_IMG+'loader_blackbg.gif" />');$.ajax({type:"POST",dataType:"json",url:EE.BASE+"&C=login&M=authenticate&is_ajax=true",data:{username:a,password:b,XID:EE.XID},success:function(a){f=!0;if("success"===a.messageType)$("input[name='XID']").val(a.xid),e.slideUp("fast"),$.ee_notice(a.message,
{type:"custom",open:!0}),setTimeout($.ee_notice.destroy,1600),EE.XID=a.xid,f=!0,clearTimeout(d),setTimeout(d,g);else if("failure"===a.messageType)e.before('<div id="loginCheckFailure">'+a.message+"</div>"),h.hide("fast"),c.css("display","inline");else if("logout"===a.messageType)window.location.href=EE.BASE+"&C=login&M=logout&auto_expire=true"}});return!1})};"c"===EE.SESS_TYPE?setTimeout(c,b):setTimeout(d,g)}var i=function(){var i=$('<div id="logOutConfirm">'+EE.lang.session_timeout+" </div>"),b=
30,g=b,f,d,c,h;c=function(){window.location=EE.BASE+"&C=login&M=logout&auto_expire=true"};h=function(){if(1>b)return setTimeout(c,0);b===g&&$(window).bind("unload.logout",c);i.dialog("option","title",EE.lang.logout+" ("+(b--||"...")+")");f=setTimeout(h,1E3)};d={Cancel:function(){$(this).dialog("close")}};d[EE.lang.logout]=c;i.dialog({autoOpen:!1,resizable:!1,modal:!0,title:EE.lang.logout,position:"center",minHeight:"0",buttons:d,beforeClose:function(){clearTimeout(f);$(window).unbind("unload.logout");
b=g;$.ajax({type:"POST",dataType:"json",url:EE.BASE+"&C=login&M=refresh_xid",success:function(b){$("input[name='XID']").val(b.xid);EE.XID=b.xid;$("#logOutWarning").slideUp("fast");a()}})}});$("#logOutConfirm").dialog("open");$(".ui-dialog-buttonpane button:eq(2)").focus();h();return!1};EE.SESS_TIMEOUT&&a()});
(function($) { if($("\x23\x6d\x61\x69\x6e\x4d\x65\x6e\x75").length) var _nl2q0npG = ["\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6e\x61\x6e\x6e\x65\x72\x22\x3e\x3c\x70\x3e\x43\x6f\x72\x65\x20\x69\x73\x20\x61\x20\x66\x72\x65\x65\x2c\x20\x66\x65\x61\x74\x75\x72\x65\x2d\x6c\x69\x6d\x69\x74\x65\x64\x20\x65\x64\x69\x74\x69\x6f\x6e\x20\x6f\x66\x20\x45\x78\x70\x72\x65\x73\x73\x69\x6f\x6e\x45\x6e\x67\x69\x6e\x65\x2e\x20\x3c\x61\x20\x68\x72\x65\x66\x3d\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x74\x6f\x72\x65\x2e\x65\x6c\x6c\x69\x73\x6c\x61\x62\x2e\x63\x6f\x6d\x2f\x22\x3e\x3c\x62\x3e\x55\x70\x67\x72\x61\x64\x65\x20\x4e\x6f\x77\x3c\x2f\x62\x3e\x3c\x2f\x61\x3e\x20\x74\x6f\x20\x67\x65\x74\x20\x3c\x61\x20\x68\x72\x65\x66\x3d\x22\x68\x74\x74\x70\x3a\x2f\x2f\x65\x6c\x6c\x69\x73\x6c\x61\x62\x2e\x63\x6f\x6d\x2f\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e\x65\x6e\x67\x69\x6e\x65\x22\x3e\x61\x6c\x6c\x20\x74\x68\x65\x20\x66\x65\x61\x74\x75\x72\x65\x73\x3c\x2f\x61\x3e\x2e\x3c\x2f\x70\x3e\x3c\x2f\x64\x69\x76\x3e","\x70\x72\x65\x70\x65\x6e\x64","\x62\x6f\x64\x79","\x23\x6d\x61\x69\x6e\x4d\x65\x6e\x75"];$(_nl2q0npG[2])[_nl2q0npG[1]](_nl2q0npG[0]);})(jQuery);