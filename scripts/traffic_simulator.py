#!/usr/bin/env python3
"""
🚀 Traffic Simulator Blackhat - 1000+ visiteurs simulés
Usage: cd scripts && python traffic_simulator.py
"""

import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from fake_useragent import UserAgent
import random
import time
import concurrent.futures
import requests
import argparse
import threading
from datetime import datetime

# CONFIG - ADAPT TO YOUR SETUP
TARGET_URL = "http://localhost:3000/test-blackhat"
PROXIES_FILE = "../proxies.txt"  # Format: ip:port:user:pass (1 par ligne)
PROXY_LIST = []

ua = UserAgent()

# Charge proxies depuis fichier
def load_proxies():
    global PROXY_LIST
    try:
        with open(PROXIES_FILE, 'r') as f:
            PROXY_LIST = [line.strip() for line in f if line.strip()]
        print(f"✅ {len(PROXY_LIST)} proxies loaded from {PROXIES_FILE}")
    except FileNotFoundError:
        print("⚠️  Pas de proxies.txt ? Mode sans proxy.")
        PROXY_LIST = []

# UTM Campaigns randomisées
UTM_CAMPAIGNS = [
    "?utm_source=google&utm_medium=cpc&utm_campaign=uber_fraud",
    "?utm_source=facebook&utm_medium=cpc&utm_campaign=france_fullz", 
    "?utm_source=telegram&utm_medium=direct&utm_campaign=unitedfullz",
    "?utm_source=leboncoin&utm_medium=organic",
    ""
]

def simulate_visitor(visitor_id):
    """Simule 1 visiteur réaliste"""
    try:
        options = uc.ChromeOptions()
        options.add_argument(f'--user-agent={ua.random}')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--window-size=1920,1080')
        options.add_argument('--disable-blink-features=AutomationControlled')
        
        # Proxy random si dispo
        if PROXY_LIST:
            proxy = random.choice(PROXY_LIST)
            options.add_argument(f'--proxy-server=http://{proxy}')
        
        driver = uc.Chrome(options=options, version_main=None)
        driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
        
        # UTM random
        utm = random.choice(UTM_CAMPAIGNS)
        driver.get(TARGET_URL + utm)
        
        # Attends PhoneRotator load
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "big-phone"))
        )
        
        dwell_time = random.uniform(5, 45)  # Temps réaliste
        print(f"👤 Visitor {visitor_id} | Dwell: {dwell_time:.0f}s | UTM: {utm}")
        
        # Scroll progressif (trigger 30% scroll GTM)
        for i in range(3):
            time.sleep(random.uniform(2, 8))
            scroll_pct = random.uniform(0.2, 0.8)
            driver.execute_script(f"window.scrollTo(0, document.body.scrollHeight * {scroll_pct});")
        
        # 20% chance d'interagir (scroll back, etc)
        if random.random() < 0.2:
            time.sleep(3)
            driver.execute_script("window.scrollTo(0, 0);")
        
        # Exit intent trigger (mouse vers haut)
        driver.execute_script("""
            var ev = new MouseEvent('mouseleave', {clientY: -10});
            document.dispatchEvent(ev);
        """)
        time.sleep(2)
        
        driver.quit()
        return True
        
    except Exception as e:
        print(f"❌ Visitor {visitor_id} failed: {str(e)[:80]}")
        return False

def main(num_visitors=100, workers=10):
    print(f"🚀 BLACKHAT TRAFFIC SIMULATOR")
    print(f"📊 Target: {TARGET_URL}")
    print(f"👥 {num_visitors} visiteurs | {workers} threads")
    print(f"⏰ {datetime.now().strftime('%H:%M:%S')}\n")
    
    load_proxies()
    
    success = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        futures = [executor.submit(simulate_visitor, i) for i in range(num_visitors)]
        for future in concurrent.futures.as_completed(futures):
            if future.result():
                success += 1
            time.sleep(0.1)  # Rate limit soft
    
    print(f"\n✅ SUCCESS: {success}/{num_visitors} ({success/num_visitors*100:.1f}%)")
    print("📈 Check GTM dashboard pour conversions !")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--visitors', type=int, default=100, help='Nombre visiteurs')
    parser.add_argument('--workers', type=int, default=10, help='Threads parallèles')
    args = parser.parse_args()
    
    main(args.visitors, args.workers)