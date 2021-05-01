const CONTEXT_MENU_POOCOIN = "POOCOIN";
const CONTEXT_MENU_BSCSCAN = "BSCSCAN";
const CONTEXT_MENU_BSCSCANH = "BSCSCANH";
const CONTEXT_MENU_BSCSCANC = "BSCSCANC";
const CONTEXT_MENU_BOG = "BOG";
const CONTEXT_MENU_ALL = "ALL";
function getword(info,tab) {
  console.log("Contract" + info.selectionText + " was clicked.");
  if(info.menuItemId == CONTEXT_MENU_POOCOIN) {
  chrome.tabs.create({  
    url: "https://poocoin.app/tokens/" + info.selectionText
  });
  }
   if(info.menuItemId == CONTEXT_MENU_BSCSCAN) {
  chrome.tabs.create({  
    url: "https://bscscan.com/token/" + info.selectionText
  });
  }
   if(info.menuItemId == CONTEXT_MENU_BSCSCANH) {
  chrome.tabs.create({  
    url: "https://bscscan.com/token/" + info.selectionText + "#balances"
  });
  }
   if(info.menuItemId == CONTEXT_MENU_BSCSCANC) {
  chrome.tabs.create({  
    url: "https://bscscan.com/address/" + info.selectionText + "#code"
  });
  }
   if(info.menuItemId == CONTEXT_MENU_BOG) {
  chrome.tabs.create({  
    url: "https://charts.bogged.finance/?token=" + info.selectionText
  });
  }
   if(info.menuItemId == CONTEXT_MENU_ALL) {
  chrome.tabs.create({  
    url: "https://charts.bogged.finance/?token=" + info.selectionText
  });
  chrome.tabs.create({  
    url: "https://bscscan.com/address/" + info.selectionText + "#code"
  });
  chrome.tabs.create({  
    url: "https://poocoin.app/tokens/" + info.selectionText
  });
  chrome.tabs.create({  
    url: "https://bscscan.com/token/" + info.selectionText
  });
  chrome.tabs.create({  
    url: "https://bscscan.com/token/" + info.selectionText + "#balances"
  });
  }  
  }
chrome.contextMenus.create({
  title: "📌 BSCScan: %s", 
  contexts:["selection"], 
  id: CONTEXT_MENU_BSCSCAN
});
chrome.contextMenus.create({
  title: "👨‍👨‍👦‍👦 BSCScan Holders: %s", 
  contexts:["selection"], 
  id: CONTEXT_MENU_BSCSCANH
});
chrome.contextMenus.create({
  title: "📑 BSCScan Contract: %s", 
  contexts:["selection"], 
  id: CONTEXT_MENU_BSCSCANC
});
chrome.contextMenus.create({
  title: "📈 Bog Charts: %s", 
  contexts:["selection"], 
  id: CONTEXT_MENU_BOG
});
chrome.contextMenus.create({
  title: "💩 Poocoin: %s", 
  contexts:["selection"], 
  id: CONTEXT_MENU_POOCOIN
});
chrome.contextMenus.create({
  title: "🌍 Open all", 
  contexts:["selection"], 
  id: CONTEXT_MENU_ALL
});
chrome.contextMenus.onClicked.addListener(getword)

