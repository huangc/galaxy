(function(){var b=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["template-hda-failedMetadata"]=b(function(g,l,f,k,j){this.compilerInfo=[4,">= 1.0.0"];f=this.merge(f,g.helpers);j=j||{};var c,o,n=this,h="function",m=f.blockHelperMissing,i=this.escapeExpression;function e(t,s){var p="",r,q;p+="\n";q={hash:{},inverse:n.noop,fn:n.program(2,d,s),data:s};if(r=f.local){r=r.call(t,q)}else{r=t.local;r=typeof r===h?r.apply(t):r}if(!f.local){r=m.call(t,r,q)}if(r||r===0){p+=r}p+='\nYou may be able to <a href="'+i(((r=((r=t.urls),r==null||r===false?r:r.edit)),typeof r===h?r.apply(t):r))+'" target="galaxy_main">set it manually or retry auto-detection</a>.\n';return p}function d(q,p){return"An error occurred setting the metadata for this dataset."}o={hash:{},inverse:n.noop,fn:n.program(1,e,j),data:j};if(c=f.warningmessagesmall){c=c.call(l,o)}else{c=l.warningmessagesmall;c=typeof c===h?c.apply(l):c}if(!f.warningmessagesmall){c=m.call(l,c,o)}if(c||c===0){return c}else{return""}})})();