if(!lt.util.load.provided_QMARK_('lt.plugins.clojurebridge')) {
goog.provide('lt.plugins.clojurebridge');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.clojurebridge.hello_panel = (function hello_panel(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from lt-clojurebridge"], null));var seq__8273_8289 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8274_8290 = null;var count__8275_8291 = 0;var i__8276_8292 = 0;while(true){
if((i__8276_8292 < count__8275_8291))
{var vec__8277_8293 = cljs.core._nth.call(null,chunk__8274_8290,i__8276_8292);var ev__8184__auto___8294 = cljs.core.nth.call(null,vec__8277_8293,0,null);var func__8185__auto___8295 = cljs.core.nth.call(null,vec__8277_8293,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8294,func__8185__auto___8295);
{
var G__8296 = seq__8273_8289;
var G__8297 = chunk__8274_8290;
var G__8298 = count__8275_8291;
var G__8299 = (i__8276_8292 + 1);
seq__8273_8289 = G__8296;
chunk__8274_8290 = G__8297;
count__8275_8291 = G__8298;
i__8276_8292 = G__8299;
continue;
}
} else
{var temp__4092__auto___8300 = cljs.core.seq.call(null,seq__8273_8289);if(temp__4092__auto___8300)
{var seq__8273_8301__$1 = temp__4092__auto___8300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8273_8301__$1))
{var c__7561__auto___8302 = cljs.core.chunk_first.call(null,seq__8273_8301__$1);{
var G__8303 = cljs.core.chunk_rest.call(null,seq__8273_8301__$1);
var G__8304 = c__7561__auto___8302;
var G__8305 = cljs.core.count.call(null,c__7561__auto___8302);
var G__8306 = 0;
seq__8273_8289 = G__8303;
chunk__8274_8290 = G__8304;
count__8275_8291 = G__8305;
i__8276_8292 = G__8306;
continue;
}
} else
{var vec__8278_8307 = cljs.core.first.call(null,seq__8273_8301__$1);var ev__8184__auto___8308 = cljs.core.nth.call(null,vec__8278_8307,0,null);var func__8185__auto___8309 = cljs.core.nth.call(null,vec__8278_8307,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8308,func__8185__auto___8309);
{
var G__8310 = cljs.core.next.call(null,seq__8273_8301__$1);
var G__8311 = null;
var G__8312 = 0;
var G__8313 = 0;
seq__8273_8289 = G__8310;
chunk__8274_8290 = G__8311;
count__8275_8291 = G__8312;
i__8276_8292 = G__8313;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojurebridge","lt-clojurebridge.hello","lt.plugins.clojurebridge/lt-clojurebridge.hello",3316512451),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-clojurebridge.hello","lt-clojurebridge.hello",1532950206)], null),new cljs.core.Keyword(null,"name","name",1017277949),"lt-clojurebridge",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.clojurebridge.hello_panel.call(null,this$);
}));
lt.plugins.clojurebridge.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8314 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8314))
{var ts_8315 = temp__4092__auto___8314;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8315))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8315);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojurebridge","on-close-destroy","lt.plugins.clojurebridge/on-close-destroy",1810745440),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojurebridge.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.clojurebridge.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.clojurebridge","lt-clojurebridge.hello","lt.plugins.clojurebridge/lt-clojurebridge.hello",3316512451));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.clojurebridge","say-hello","lt.plugins.clojurebridge/say-hello",2852838951),new cljs.core.Keyword(null,"desc","desc",1016984067),"lt-clojurebridge: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.clojurebridge.hello);
})], null));
}

//# sourceMappingURL=clojurebridge_compiled.js.map