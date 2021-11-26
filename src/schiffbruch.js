const KXPIXEL = 54; //Breite der Kacheln
const KYPIXEL = 44; //Hoehe der Kacheln
const S1XPIXEL = 20; //Breite der Schrift1
const S1YPIXEL = 20; //Höhe der Schrift1
const S1ABSTAND = 13; //Abstand zum nächsten Buchstaben
const S2XPIXEL = 10; //Breite der Schrift2
const S2YPIXEL = 15; //Höhe der Schrift2
const S2ABSTAND = 10; //Abstand zum nächsten Buchstaben
const MAXXKACH = 60;	//Anzahl der Kacheln
const MAXYKACH = 60;
const MAXSCAPEX = 3360;// Größe der Scapesurface
const MAXSCAPEY = 1700;
const MAXX = 800; //Bildschirmauflösung
const MAXY = 600;
const GIPFEL = 3; //Hoehe des Gipfels
const MAXFLUSS = 1000;//Maximale Flusslänge
const FLUSSANZAHL = 1; //Wieviele Flüsse? Mehr als 1 funktioniert seltsamerweise nicht mehr..
const SKARTEX = 370; //Schatzkartenbreite
const SKARTEY = 370; //Schatzkartenhöhe
const ROUND = Math.round; //Zahlen runden Macro

const MEERWELLEN  = 0;
const FLUSS1	= MEERWELLEN+1;
const FLUSS2	= MEERWELLEN+2;
const FLUSS3	= MEERWELLEN+3;
const FLUSS4	= MEERWELLEN+4;
const FLUSS5	= MEERWELLEN+5;
const FLUSS6	= MEERWELLEN+6;
const FLUSS7	= MEERWELLEN+7;
const FLUSS8	= MEERWELLEN+8;
const FLUSS9	= MEERWELLEN+9;
const FLUSS10	= MEERWELLEN+10;
const MUENDUNG1 = MEERWELLEN+11;
const MUENDUNG2 = MEERWELLEN+12;
const MUENDUNG3 = MEERWELLEN+13;
const MUENDUNG4 = MEERWELLEN+14;
const QUELLE1	  = MEERWELLEN+15;
const QUELLE2	  = MEERWELLEN+16;		//Wenn hier was eingefügt wird, auch die FillRohr ändern!!
const QUELLE3	  = MEERWELLEN+17;
const QUELLE4	  = MEERWELLEN+18;
const SCHLEUSE1 = MEERWELLEN+19;
const SCHLEUSE2 = MEERWELLEN+20;
const SCHLEUSE3 = MEERWELLEN+21;
const SCHLEUSE4 = MEERWELLEN+22;
const SCHLEUSE5 = MEERWELLEN+23;
const SCHLEUSE6 = MEERWELLEN+24;
const BAUM1	   = 25;
const BAUM2	  = BAUM1+1;
const BAUM3	  = BAUM1+2;
const BAUM4	  = BAUM1+3;
const BUSCH	  = BAUM1+4;
const BAUM1DOWN = BAUM1+5;
const BAUM2DOWN = BAUM1+6;
const BAUM3DOWN = BAUM1+7;
const BAUM4DOWN = BAUM1+8;
const BAUMGROSS = BAUM1+9;
const FEUER	  = BAUM1+10;
const WRACK	  = BAUM1+11;
const WRACK2	=   BAUM1+12;
const FELD	   = 38;
const ZELT     =  FELD+1;
const BOOT	  = FELD+2;
const ROHR	 =  FELD+3;
const SOS		  = FELD+4;
const HAUS1	 =  FELD+5;
const HAUS2	 =  FELD+6;
const HAUS3	  = FELD+7;
const FEUERSTELLE = FELD+8;
const CUPFEIL	   = 47;
const CURICHTUNG = CUPFEIL+1;
const CUUHR	  = CUPFEIL+2;
const GUYLINKS   = 50;
const GUYOBEN	  = GUYLINKS+1;
const GUYRECHTS = GUYLINKS+2;
const GUYUNTEN  = GUYLINKS+3;
const GUYSUCHEN = GUYLINKS+4;
const GUYESSEN  = GUYLINKS+5;
const GUYTRINKEN= GUYLINKS+6;
const GUYFAELLEN= GUYLINKS+7;
const GUYWARTEN = GUYLINKS+8;
const GUYFELD   = GUYLINKS+9;
const GUYBINDENOBEN = GUYLINKS+10;
const GUYBINDENUNTEN = GUYLINKS+11;
const GUYSCHLAFEN	  = GUYLINKS+12;
const GUYSCHLAFZELT = GUYLINKS+13;
const GUYGEHINZELT  = GUYLINKS+14;
const GUYHINLEGEN   = GUYLINKS+15;
const GUYAUFSTEHEN  = GUYLINKS+16;
const GUYANGELN1LINKS = GUYLINKS+17;
const GUYANGELN1OBEN  = GUYLINKS+18;
const GUYANGELN1RECHTS = GUYLINKS+19;
const GUYANGELN1UNTEN = GUYLINKS+20;
const GUYANGELN2LINKS = GUYLINKS+21;
const GUYANGELN2OBEN  = GUYLINKS+22;
const GUYANGELN2RECHTS = GUYLINKS+23;
const GUYANGELN2UNTEN  = GUYLINKS+24;
const GUYANGELN3LINKS = GUYLINKS+25;
const GUYANGELN3OBEN  = GUYLINKS+26;
const GUYANGELN3RECHTS = GUYLINKS+27;
const GUYANGELN3UNTEN  = GUYLINKS+28;
const GUYSCHLAGEN    = GUYLINKS+29;
const GUYBOOTLINKS = GUYLINKS+30;
const GUYBOOTOBEN    = GUYLINKS+31;
const GUYBOOTRECHTS  = GUYLINKS+32;
const GUYBOOTUNTEN   = GUYLINKS+33;
const GUYBOOTANGELN1 = GUYLINKS+34;
const GUYBOOTANGELN2 = GUYLINKS+35;
const GUYBOOTANGELN3 = GUYLINKS+36;
const GUYTAUCHEN1	=	GUYLINKS+37;
const GUYTAUCHEN2	=	GUYLINKS+38;
const GUYTAUCHEN3	=	GUYLINKS+39;
const GUYHAMMER	= GUYLINKS+40;
const GUYKLETTERN1	= GUYLINKS+41;
const GUYKLETTERN2	= GUYLINKS+42;
const GUYHAMMER2  	= GUYLINKS+43;
const GUYGEHINHAUS	= GUYLINKS+44;
const GUYSCHLAFHAUS   = GUYLINKS+45;
const GUYGEHAUSHAUS	= GUYLINKS+46;
const GUYANZUENDEN	= GUYLINKS+47;
const GUYAUSSCHAU		= GUYLINKS+48;
const GUYSCHAUFELN	= GUYLINKS+49;
const GUYSCHIFF		= GUYLINKS+50;
const GUYSCHIFFDOWN	= GUYLINKS+51;
const GUYSCHWIMMEN	= GUYLINKS+52;
const GUYTOD		= GUYLINKS+53;
const GUYBOOTTOD	= GUYLINKS+54;
const GUYBOOTWARTEN	= GUYLINKS+55;
const GUYSCHLEUDER	= GUYLINKS+56;
const BUTTGITTER   = 107;
const BUTTANIMATION = BUTTGITTER+1;
const BUTTBEENDEN   = BUTTGITTER+2;
const BUTTNEU		  = BUTTGITTER+3;
const BUTTTAGNEU	  = BUTTGITTER+4;
const BUTTSOUND	  = BUTTGITTER+5;
const BUTTAKTION   = BUTTGITTER+6;
const BUTTBAUEN    = BUTTGITTER+7;
const BUTTINVENTAR = BUTTGITTER+8;
const BUTTWEITER   = BUTTGITTER+9;
const BUTTSTOP     = BUTTGITTER+10;
const BUTTABLEGEN  = BUTTGITTER+11;
const BUTTSUCHEN    = 119;
const BUTTESSEN     = BUTTSUCHEN+1;
const BUTTSCHLAFEN  = BUTTSUCHEN+2;
const BUTTFAELLEN   = BUTTSUCHEN+3;
const BUTTANGELN    = BUTTSUCHEN+4;
const BUTTANZUENDEN = BUTTSUCHEN+5;
const BUTTAUSSCHAU  = BUTTSUCHEN+6;
const BUTTSCHATZKARTE = BUTTSUCHEN+7;
const BUTTSCHATZ      = BUTTSUCHEN+8;
const BUTTSCHLEUDER   = BUTTSUCHEN+9;
const BUTTZELT   = 129;
const BUTTFELD   = BUTTZELT+1;
const BUTTBOOT   = BUTTZELT+2;
const BUTTROHR   = BUTTZELT+3;
const BUTTSOS	   = BUTTZELT+4;
const BUTTHAUS1  = BUTTZELT+5;
const BUTTHAUS2  = BUTTZELT+6;
const BUTTHAUS3  = BUTTZELT+7;
const BUTTFEUERST = BUTTZELT+8;
const BUTTFRAGEZ	= BUTTZELT+9;
const BUTTDESTROY = BUTTZELT+10;
const SAEULE1	   = 140;
const SAEULE2	   = SAEULE1+1;
const SAEULE3	   = SAEULE1+2;
const ROHAST	   = 143;
const ROHSTAMM   = ROHAST+1;
const ROHSTEIN   = ROHAST+2;
const ROHAXT     = ROHAST+3;
const ROHBLATT   = ROHAST+4;
const ROHEGGE	   = ROHAST+5;
const ROHLIANE   = ROHAST+6;
const ROHANGEL   = ROHAST+7;
const ROHHAMMER  = ROHAST+8;
const ROHFERNROHR = ROHAST+9;
const ROHSTREICHHOLZ = ROHAST+10;
const ROHSCHAUFEL = ROHAST+11;
const ROHKARTE	= ROHAST+12;
const ROHSCHLEUDER = ROHAST+13;
const ROEMISCH1  = 157;
const ROEMISCH2  = ROEMISCH1+1;
const INVPAPIER  = 159;
const RING	   = INVPAPIER+1;
const KREUZ	   = INVPAPIER+2;
const JA		 =   INVPAPIER+3;
const NEIN	   = INVPAPIER+4;
const SONNE	   = INVPAPIER+5;
const PROGRAMMIERUNG = 165;
const DIRKPLATE	 =   PROGRAMMIERUNG+1;
const MATTHIAS	 =   PROGRAMMIERUNG+2;
const TOBIAS		=   PROGRAMMIERUNG+3;
const SIGRID		  =  PROGRAMMIERUNG+4;
const SOUNDS		   = PROGRAMMIERUNG+5;
const PATHFINDING	   = PROGRAMMIERUNG+6;
const JOHN		   = PROGRAMMIERUNG+7;
const HEIKO		   = PROGRAMMIERUNG+8;
const GISELA		 =   PROGRAMMIERUNG+9;
const WEITEREHILFE   = PROGRAMMIERUNG+10;
const TESTSPIELER	   = PROGRAMMIERUNG+11;
const SCHWARZ		   = PROGRAMMIERUNG+12;
const MUSIK		   = PROGRAMMIERUNG+13;
const DPSOFTWARE	 =   PROGRAMMIERUNG+14;
const BILDANZ		  =  DPSOFTWARE+1; //Wieviele Bilder

//Sounds
const WAVNICHTS	 = 0;
const WAVSTURM	 = 1;
const WAVSCHWIMMEN    = WAVSTURM+1;
const WAVPLATSCH		= WAVSTURM+2;
const WAVFAELLEN		= WAVSTURM+3;
const WAVSCHLAGEN		= WAVSTURM+4;
const WAVSCHLEUDER	= WAVSTURM+5;
const WAVSCHAUFELN	= WAVSTURM+6;
const WAVHAMMER		= WAVSTURM+7;
const WAVCRASH		= WAVSTURM+8;
const WAVSCHNARCHEN	= WAVSTURM+9;
const WAVTRINKEN	= 	WAVSTURM+10;
const WAVKNISTERN	= 	WAVSTURM+11;
const WAVANGEL		= WAVSTURM+12;
const WAVWALD		 = 14;
const WAVFEUER		= WAVWALD+1;
const WAVBRANDUNG	= 	WAVWALD+2;
const WAVBAUMFAELLT	= WAVWALD+3;
const WAVFLUSS		= WAVWALD+4;
const WAVKLICK	 = 19;
const WAVKLICK2		= WAVKLICK+1;
const WAVLOGO		= 	WAVKLICK+2;
const WAVABSPANN	= 	WAVKLICK+3;
const WAVWOLF		= 	WAVKLICK+4;
const WAVERFINDUNG	= WAVKLICK+5;
const WAVANZ		= 	WAVERFINDUNG+1;	//Anzahl der Sounds

//Aktionen
const AKNICHTS	 = 0;
const AKSUCHEN	    = 1;
const AKESSEN 	    = 2;
const AKTRINKEN 	    = 3;
const AKFAELLEN 	    = 4;
const AKFELD  	    = 5;
const AKTAGENDE	 = 6;
const AKGERETTET      = 7;
const AKZELT		 = 8;
const AKSCHLAFEN	 = 9;
const AKABBRUCH	   = 10;
const AKANGELN	   = 11;
const AKBOOT		   = 12;
const AKABLEGEN	   = 13;
const AKANLEGEN      = 14;
const AKROHR		   = 15;
const AKDESTROY	   = 16;
const AKSOS		   = 17;
const AKHAUS1		   = 18;
const AKHAUS2		   = 19;
const AKHAUS3		   = 20;
const AKFEUERSTELLE  = 21;
const AKANZUENDEN    = 22;
const AKAUSSCHAU	   = 23;
const AKSCHATZ	   = 24;
const AKINTRO		   = 25;
const AKSCHLEUDER	   = 26;
const AKSPIELVERLASSEN = 27;
const AKNEUBEGINNEN  = 28;
const AKTOD		   = 29;
const AKTAGNEUBEGINNEN = 30;

//Men�s
const MEKEINS		 = 0;
const MEAKTION	 = 1;
const MEBAUEN	     = 2;
const MEINVENTAR	 = 3;

//Textfelder
const TXTTEXTFELD	 = 0;
const TXTFPS		 = 1;
const TXTTAGESZEIT = 2;
const TXTCHANCE	 = 3;
const	TXTPAPIER	 = 4; //Muss!!! als letztes stehen
const TEXTANZ		 = 5; //Wieviele Textbreiche

//Resourcen
const WASSER		 = 0;
const NAHRUNG		 = 1;
const GESUNDHEIT	 = 2;

//Spielzustände
const SZNICHTS	 = 0;
const SZINTRO		 = 1;
const SZSPIEL		 = 2;
const SZABSPANN	 = 3;
const SZGERETTET	 = 4;
const SZLOGO		 = 5;

/*
//Deklarationen
void InitDDraw();					//DirectDraw initialisieren
void InitDInput();					//DirectInput initialisieren
void InitDSound();					//DirectSound initialisieren
void CheckMouse();					//Mouse nachpr�fen
void SetAcquire();					//Maus aktivieren

void NeuesSpiel(bool neu);						// Neues Spiel starten
void Generate();					   	// Kacheln in den Speicher zeichnen	
void Compute(short MinGroesse, short MaxGroesse);	//Zufallslandschaft erzeugen
void Zeige();							// Landschaft anzeigen
void ZeigeIntro();						// F�r das Intro zust�ndig
void ZeigeAbspann();					// F�r den Abspann
void ZeigeLogo();						// Zeigt das Logo
void ZeichneObjekte();					// Alles Landschaftsdetails zeichnen, die nicht im Speicher sind
void ZeichneGuy();						// Zeichnet die Spielfigur
void ZeichnePanel();					// Zeichnet die Karte
void ZeichneBilder(short x, short y, short i,RECT Ziel, bool Reverse, short Frucht);   // Zeichnet die Bmp-Bilder			
void Meer();							// Mit Meer auf�llen
void Fluss();				// Erstellt einen Flu�
bool CheckFluss(short x, short y); //F�r FLuss()
void Baeume(short Prozent);				// Verteilt die B�ume auf Insel
void CalcKoor();						// Bildschirmkoordinaten der Kacheln berechnnen;
void CheckMouse();						// Maus abfragen
short CheckKey();						// Tastatur abfragen
void MouseInSpielflaeche(short Button,short Push, short xDiff, short yDiff);	// Falls die Maus in der Spielf�che ist
void MouseInPanel(short Button,short Push);		// Falls die Maus im Panel ist
bool InDreieck(short X, short Y, short X0, short Y0, short X1, short Y1, short X3, short Y3);
bool InRect(short x,short y, RECT rcRect); //Ist ein Punkt in einem Rechteck
inline DWORD RGB2DWORD(BYTE r, BYTE g, BYTE b); // Rechnet 24Bit RGB in 16 Bit um (F�r ddbltfx.dwFillColor)
void MarkRoute(bool Mark);				//Markiert die Route
bool FindTheWay();						//PathFinding
short RotateRight(short Dir);			//Richtungskoordinate rechtsrum umrechnen
void SortRoute();						//Die Route in die richtige Reihenfolge bringen
bool CheckRoute(short x, short y, bool save);      //Nachpr�fen ob auf aktuellem Teil in der Route ist
void ShortRoute(short Zielx, short Ziely);	//Macht eine Mini-Route von den Guy.Position zu den Zielk.
void CalcGuyKoor();						//Berechnet die neuen Koordinaten der Spielfigur
void Animationen();						//Startet die einzelnen Animationen
void CalcRect(RECT rcBereich);			//Beschneidet das BlitRechteck so, da� es nur innerhalb des Bereiches gemalt wird
void DrawString(char *string,short x,short y, short Art); //Schreibt einen String an eine gew�nschte Stelle
short DrawText(int TEXT,short Bereich, short Art); //Schreibt einen Text in ein Rechteck
short Refresh();							//Wird st�ndig ausgef�hrt und aktuallisiert alles;
void LimitScroll();						//Verhindert das Scrollen aus dem Bild
void Blitten(LPDIRECTDRAWSURFACE4 lpDDSVon, LPDIRECTDRAWSURFACE4 lpDDSNach,bool Transp);
void ZeichnePapier();					//Zeichnet das Papier f�r den Text
void Textloeschen(short Bereich);			//L�scht einen Breich in der Textsurface
void AddTime(short h,short m);			//Addiert Stunden und Minuten zur TagesZeit	
void AddResource(short Art, float Anzahl); //F�gt wassser usw hinzu
void Entdecken();						//Deckt die Kacheln neben der Spielfigur auf	
void InitStructs();						//Initialisiert die Structs 
void Event(short Eventnr);				//Startet die Aktionsprozeduren
void ButtAniAus();						//Schaltet alle Knopfanimationien aus (f�r MouseInPanel)
void CheckBenutze(short Objekt);		//Pr�ft ob die richtigen Rohstoffe benutzt wurden (im Inventar)
bool CheckRohstoff();					//Pr�ft die Rohstoffe die zum Bau ben�tigt werden
void MakeRohString(short x,short y, short Objekt);	//Schreibt in den Rohstring die ben�tigten Rohstoffe
void CheckSpzButton();					//Wechselt die Kn�pfe (Stop,Weiter,Ablegen usw.)
void ChangeBootsFahrt();				//�ndert die notwendigen Sachen f�r eine Bootsfahrt (und zur�ck);
void FillRohr();						//�berpr�ft die R�hren, ob sie an Wassernetz angeschlossen sind
void CheckRohr(short x, short y);		//Rekursive Procedure f�r FillRohr();
void Fade(short RP,short GP,short BP);	//Bild abdunkeln mittels Gamma-Werten (in Prozent pro Farbwert)
void Schatz();							//Schatz vergraben und Schatzkarte malen
void DrawSchatzkarte();					//Schatzkarte malen
void PutPixel(short x, short y, DWORD color, LPDDSURFACEDESC2 ddsd); //Schreibt Pixel in eine Surface (davor lock())
void GetPixel(short x, short y, LPDDSURFACEDESC2 ddsd); //Das Ergebnis wird in rgbStruct gespeichert
void Piratenwrack();					//Setzt das Piratenwrack
void LoadSound(short Sound);			//L�dt einen Sound in den Speicher		
void PlaySound(short Sound, short Volume);//Spiel eine Wavedatei mit Prozentualer Lautst�rke
void StopSound(short Sound);			//Stoppt ein Sound
void SaveGame();						//Speichert den Spielstand
bool LoadGame();						//L�dt den Spielstand
void AbspannCalc();						//Kalkuliert die Koordinaten f�r den Abspann
void AbspannBlt(short Bild, short Prozent); //Zeichnet die Bilder im Abspann


//Aktionen
void AkSuchen();						//Kacheln durchsuchen					
void AkEssen();							//Fr�chte essen		
void AkTrinken();						//Wasser trinken	
void AkFaellen();						//B�ume f�llen	
void AkFeld();							//Feld anlegen	
void AkTagEnde();						//Wenn der Tag zu Ende ist
void AkGerettet();						//Wenn man gerettet wird
void AkZelt();							//Zelt bauen
void AkSchlafen();						//Schlafen
void AkAbbruch();						//Aktion abbrechen
void AkAngeln();						//Aktion abbrechen
void AkBoot();							//Boot bauen
void AkAblegen();						//Vom Strand aus ins Meer ablegen
void AkAnlegen();						//Vom Meer an den Strand anlegen
void AkRohr();						    //Bew�sserungsrohr bauen
void AkDestroy();						//Objekt abreissen
void AkSOS();						    //SOS schreiben
void AkHaus1();						    //Leiter bauen
void AkHaus2();						    //Plattform bauen
void AkHaus3();						    //Baumhaus bauen
void AkFeuerstelle();					//Feuerstelle aufstapeln
void AkAnzuenden();						//Feuerstelle anzuenden
void AkAusschau();						//Ausschau halten
void AkSchatz();						//Nach Schatz graben
void AkIntro();							//Intro aktionen
void AkSchleuder();						//Jagdaktion
void AkSpielverlassen();				//Fragt, ob man es wirklich verlassen will
void AkNeubeginnen();					//Fragt, ob man das Spiel neu beginnen will
void AkTagNeubeginnen();				//Fragt, ob man den Tag neu beginnen will
void AkTod();							//Sterben
*/

let RECT = (left = 0, top = 0, right = 0, bottom = 0) => ({left, top, right, bottom});

//ddraw
let            lpDD = null;           // DirectDraw object
let     lpDDSPrimary =null ;   // DirectDraw primary surface
let     lpDDSBack = null;      // DirectDraw back surface
let     lpDDSMisc = null;      // DirectDraw Bilder surface
let     lpDDSPanel = null;     // DirectDraw Panel surface
let     lpDDSGuyAni = null;    // DirectDraw GuyAni surface
let     lpDDSAnimation = null; // DirectDraw Animation surface
let     lpDDSKarte= null;      // DirectDraw MiniMap surface
let     lpDDSSchrift= null;    // DirectDraw Schrift surface
let     lpDDSSchrift1= null;   // DirectDraw Schrift1 surface
let     lpDDSSchrift2= null;   // DirectDraw Schrift2 surface
let     lpDDSTextFeld= null;   // DirectDraw TextFeld surface
let     lpDDSPapier= null;     // DirectDraw Paier surface
let     lpDDSBaum = null;      // DirectDraw Bäume surface
let     lpDDSBau = null;       // DirectDraw Bauwerke surface
let     lpDDSCredits = null;   // DirectDraw Credits surface
let     lpDDSLogo = null;		// DirectDraw Logo surface
let     lpDDSCursor = null;    // DirectDraw Cursor surface
let     lpDDSButtons = null;   // DirectDraw Buttons surface
let     lpDDSInventar = null;  // DirectDraw Inventar surface
let     lpDDSScape= null;      // DirectDraw Landschaft surface
let     lpDDSSchatzkarte= null;// SchatzkartenSurface

/*
LPDIRECTDRAWPALETTE      lpDDPal = null;        // DirectDraw palette
DDBLTFX					 ddbltfx;				// DirectDraw Effekte 
DDPIXELFORMAT			 ddpf;
DDSURFACEDESC2           ddsd,ddsd2;					//Zwischenspeicher der SurfaceEigenschaften

LPDIRECTDRAWGAMMACONTROL lpDDGammaControl = null;  //Die drei sind für das Gammaablenden
DDGAMMARAMP				 DDGammaRamp;   
DDGAMMARAMP				 DDGammaOld;   
*/



// Directinput
/*
IDirectInput*           g_pDI           = null;
IDirectInputDevice*     g_pMouse        = null;
IDirectInputDevice*     g_pKey          = null;
HANDLE                  g_hMouseEvent   = null;
HINSTANCE				g_hInst			= null;
 */
BOOL					MouseInit		= false;

// DirectSound
/*
LPDIRECTSOUND			lpds;			//DirectSoundObjekt
DSBUFFERDESC            dsbdesc;
LPDIRECTSOUNDBUFFER     lpdsb;
LPDIRECTSOUNDBUFFER     lpdsbPrimary;
 */
let     lpdsbWav = new Array(WAVANZ); //Wavedateispeicher

let                    bActive =false;        // is application active?
let					Spielzustand = SZNICHTS;	   // in welchem Zustand ist das Spiel?
let					MouseAktiv = false;    // Mouse angestellt?
let					LAnimation = true;	   // Ist die Landschaftanimation angeschaltet?
//HWND					hwnd;
let					Gitter;			//Gitternetz an/aus
let					ScapeGrenze = RECT();     //Diese Koordinaten zeigen die Größe der Landschaft an
let					Flusslaenge = new Array(FLUSSANZAHL);
let					CursorTyp;		//Welcher Cursortyp?
let					Button0down;	//linke Maustaste gedrückt gehalten
let					Button1down;	//rechte Maustaste gedrückt gehalten
let					RouteLaenge;	//Länge
let					RoutePunkt;		//Aktueller Index in RouteKoor
let					Schrittx,Schritty; //Zum Figur laufen lassen
let					Zeit;			//Start der Sekunde
let					Bild, LastBild;	//Anzahl der Bilder in der Sekunde
let					rcRectdes=RECT(),rcRectsrc=RECT(); //Ständig benötigte Variable zum Blitten
let					Tag,Stunden,Minuten;		//Wieviel Uhr (0-12h)
let					StdString;	//Standard string
let					RohString;	//Darin wird gespeichert, wieviel Rohstoffe noch benötigt werden
let					PapierText;			//Wieviel Papier? (in Pixel) -1 = Kein Text
let					HauptMenue;			//Welches Menü?
let					TwoClicks;				//Für Aktionen mit zwei Mausklicks
let					Chance;					//Wie groß ist die Chance am Tag gerettet zu werden
let					BootsFahrt;				//Gerade mit dem Boot unterwegs?
let					Nacht;					//Wird die Tageszusammenfassung angezeigt?
let					Soundzustand;			//-1 = keine Soundkarte;0=kein Sound;1=Sound an
let					Spielbeenden = false;	//Wenn true wird das Spiel sofort beendet
let					Frage;					//-1=KeineFrage;0=Frage wird gestellt;1=Ja;2=Nein
let					pi = Math.PI;		//pi, was sonst
let					AbspannNr=0;			//Zähler für Abspann
let					AbspannZustand=0;			//Wo im Abspann
let					SchatzGef	= false;	//wurde der Schatz gefunden

// Pathfinding
let		Step,Steps;
let		LenMap = Array.from(Array(MAXYKACH), x => Array(MAXXKACH).fill(0));

//Bereiche
//								links,		oben,		rechts,				unten
const    rcGesamt	    = RECT(0,			0,			MAXX,				MAXY);
const    rcSpielflaeche	= RECT(0,			0,			MAXX-195,			MAXY-20);
const    rcPanel		= RECT(MAXX-205,	0,			MAXX,				MAXY);
const    rcKarte		= RECT(MAXX-158,	23,			MAXX-158+MAXXKACH*2,23+MAXYKACH*2);
const    rcTextFeld1    = RECT(0,			MAXY-20,	MAXX-195,			MAXY);

class TEXTBEREICH
{
	constructor()
	{
		this.Aktiv = false; //Steht Text in diesem Bereich?
		this.rcText = RECT(); //Die Position des Ausgabe
	}
}

let TextBereich = Array.from(Array(TEXTANZ), x => new TEXTBEREICH());

let ZWEID = (x = 0, y = 0) => ({x, y});

let Camera = ZWEID();					//aktueller Kartenausschnitt
let MousePosition = ZWEID();			//     "    Mauskoordinaten
let RouteZiel = ZWEID(), RouteStart = ZWEID();	// Koordinaten des Starts und des Endes der Route
let Route = Array.from(Array(MAXXKACH*MAXYKACH), x => ZWEID());	// Liste der Routenpunkte
let RouteKoor = Array.from(Array(2*MAXXKACH*MAXYKACH), x => ZWEID()); // Liste der Routenkoordinaten
let SaveRoute = Array.from(Array(2*MAXXKACH*MAXYKACH), x => ZWEID()); // Zum zwischenspeichern der Route
let NewPos = ZWEID();					// Nur innerhalb des Pathfindings benutzt
let GuyPosScreenStart = ZWEID();	    // Absolute StartPosition bei einem Schritt (Für CalcGuyKoor)
let SchatzPos = ZWEID();				//Hier ist der Schatz vergraben

let RGBSTRUCT = (r=0, g=0, b=0) => ({r,g,b});
let rgbStruct = RGBSTRUCT(); //Hier werden die Farben eines Pixels zwischengespeichert

// inline void DWORD2RGB(DWORD color,RGBSTRUCT *PrgbStruct);

let Guy = {
	Aktiv: false,//Ist er aktiv?
	Aktion: 0, //Welche Aktion (Suchen, fischen ...) (�bergeordnet �ber Zustand)
	Pos: ZWEID(),	// KachelPosition der Spielfigur
	PosAlt: ZWEID(), //Die urspr�nglich Position in der Kachel (f�r die Aktionsprozeduren)
	PosScreen: ZWEID(), // Absolute Position der Spielfigur
	Zustand: 0, //Was macht er gerade? (Animation)(linkslaufen,rechtslaufen...,angeln..)
	AkNummer: 0, //Bei welcher Aktion (f�r die Aktionsprozeduren)
	Resource: [0,0,0],	//Wieviel Wasservorrat usw
	Inventar: Array(BILDANZ).fill(0), //Welche Rohstoffe usw. besitzt man
};

class BMP
{
	constructor()
	{
		this.rcSrc = RECT();     //Quelle des 1. Bildes
		this.rcDes = RECT();		//Falls es immer an die gleiche Stelle gezeichnet wird. (Buttons)
		this.Rohstoff = Array(BILDANZ).fill(0); //Anzahl des i.Rohstoffs, den man zum Bau benötigt
	}
}

let Bmp = Array.from(Array(BILDANZ), x => BMP());
let Wav = Array.from(Array(WAVANZ), x => ({}));
let AbspannListe = Array.from(Array(10), x => Array(10));	//Namenabfolge im Abspann

/*
bool LineIntersect(ZWEID LineStartPos, ZWEID Pos, bool store); //Für Pathfinding (Ist eine Gerade unterbrochen?)
ZWEID GetKachel(short x,short y);		// Welche Kachel ist unter den angegebenen Koordinaten
*/

//Die Eckkoordinaten der Kacheln (Achtung: mit überlappendem Rand)
const EckKoor = [
//		0				1				2				3				Ecke
		[ZWEID(-1,29),	ZWEID(26,15),	ZWEID(54,30),	ZWEID(27,44)],//0
		[ZWEID(-1,13),	ZWEID(26,15),	ZWEID(54,30),	ZWEID(27,28)],//1
		[ZWEID(-1,29),	ZWEID(26,15),	ZWEID(54,14),	ZWEID(27,28)],//2
		[ZWEID(-1,29),	ZWEID(26,-1),	ZWEID(54,14),	ZWEID(27,44)],//3
		[ZWEID(-1,13),	ZWEID(26,-1),	ZWEID(54,30),	ZWEID(27,44)],//4
		[ZWEID(-1,13),	ZWEID(26,15),	ZWEID(54,30),	ZWEID(27,44)],//5
		[ZWEID(-1,29),	ZWEID(26,15),	ZWEID(54,30),	ZWEID(27,28)],//6		Kacheltyp
		[ZWEID(-1,29),	ZWEID(26,15),	ZWEID(54,14),	ZWEID(27,44)],//7
		[ZWEID(-1,29),	ZWEID(26,-1),	ZWEID(54,30),	ZWEID(27,44)],//8
		[ZWEID(-1,13),	ZWEID(26,-1),	ZWEID(54,14),	ZWEID(27,44)],//9
		[ZWEID(-1,13),	ZWEID(26,-1),	ZWEID(54,30),	ZWEID(27,28)],//10
		[ZWEID(-1,13),	ZWEID(26,15),	ZWEID(54,14),	ZWEID(27,28)],//11
		[ZWEID(-1,29),	ZWEID(26,-1),	ZWEID(54,14),	ZWEID(27,28)],//12
];
		

const Vierecke = [ //0=Passt nicht 1=1runter 2=gleiche Hoehe 3=1hoch
//		  0	  1	  2	  3	  4	  5	  6	  7	  8	  9	 10	 11	 12
	[	[2,0,1,0,2,2,0,0,2,0,0,1,1],//0
		[2,1,0,2,0,0,0,2,2,0,1,1,0],//1
/*0*/	[2,0,2,0,1,0,2,2,0,1,1,0,0],//2 Kante
		[2,2,0,1,0,2,2,0,0,1,0,0,1] //3
	],
	[	[0,2,0,0,0,0,2,0,0,0,2,0,0],
		[2,1,0,2,0,0,0,2,2,0,1,1,0],
/*1*/	[0,2,0,0,0,2,0,0,0,0,0,2,0],
		[3,3,0,2,0,3,3,0,0,2,0,0,2]
	],
	[	[2,0,1,0,2,2,0,0,2,0,0,1,1],
		[0,0,2,0,0,0,2,0,0,0,0,0,2],
/*2*/	[3,0,3,0,2,0,3,3,0,2,2,0,0],
		[0,0,2,0,0,0,0,2,0,0,0,2,0]
	],
	[	[0,0,0,2,0,0,0,2,0,2,0,0,0],
		[3,2,0,3,0,0,0,3,3,0,2,2,0],
/*3*/	[0,0,0,2,0,0,0,0,2,0,0,0,2],
		[2,2,0,1,0,0,2,0,0,1,0,0,1]
	],
	[	[3,0,2,0,3,3,0,0,3,0,0,2,2],
		[0,0,0,0,2,2,0,0,0,2,0,0,0],
/*4*/	[2,0,2,0,0,0,2,2,0,1,1,0,0],
		[0,0,0,0,2,0,0,0,2,0,2,0,0]
	],//  0	  1	  2	  3	  4	  5	  6	  7	  8	  9	 10	 11	 12
	[	[0,2,0,0,0,0,2,0,0,0,2,0,0],
		[2,1,0,2,0,0,0,2,2,0,1,1,0],
/*5*/	[2,0,2,0,1,0,2,2,0,1,1,0,0],
		[0,0,0,0,2,0,0,0,2,0,2,0,0]
	],
	[	[2,0,1,0,2,2,0,0,2,0,0,1,1],
		[2,1,0,2,0,0,0,2,2,0,1,1,0],
/*6*/	[0,2,0,0,0,2,0,0,0,0,0,2,0],
		[0,0,2,0,0,0,0,2,0,0,0,2,0]
	],
	[	[2,0,1,0,2,2,0,0,2,0,0,1,1],
		[0,0,2,0,0,0,2,0,0,0,0,0,2],
/*7*/	[0,0,0,2,0,0,0,0,2,0,0,0,2],
		[2,2,0,1,0,2,2,0,0,1,0,0,1]
	],
	[	[0,0,0,2,0,0,0,2,0,2,0,0,0],
		[0,0,0,0,2,2,0,0,0,2,0,0,0],
/*8*/	[2,0,2,0,1,0,2,2,0,1,1,0,0],
		[2,2,0,1,0,2,2,0,0,1,0,0,1]
	],
	[	[3,0,2,0,3,3,0,0,3,0,0,2,2],
		[3,2,0,3,0,0,0,3,3,0,2,2,0],
/*9*/	[0,0,0,2,0,0,0,0,2,0,0,0,2],
		[0,0,0,0,2,0,0,0,2,0,2,0,0]
	],//  0	  1	  2	  3	  4	  5	  6	  7	  8	  9	 10	 11	 12
	[	[3,0,2,0,3,3,0,0,3,0,0,2,2],
		[0,0,0,0,2,2,0,0,0,2,0,0,0],
/*10*/	[0,2,0,0,0,2,0,0,0,0,0,2,0],
		[3,3,0,2,0,3,3,0,0,2,0,0,2]
	],
	[	[0,2,0,0,0,0,2,0,0,0,2,0,0],
		[0,0,2,0,0,0,2,0,0,0,0,0,2],
/*11*/	[3,0,3,0,2,0,3,3,0,2,2,0,0],
		[3,3,0,2,0,3,3,0,0,2,0,0,2]
	],
	[	[0,0,0,2,0,0,0,2,0,2,0,0,0],
		[3,2,0,3,0,0,0,3,3,0,2,2,0],
/*12*/	[3,0,3,0,2,0,3,3,0,2,2,0,0],
		[0,0,2,0,0,0,0,2,0,0,0,2,0]
	],

];

class SCAPE
{
	constructor()
	{
		this.ObPos = ZWEID();		//Die Koordinaten des Objekts (relativ zu xScreen und yScreen)
		this.GPosAlt = ZWEID();		// Damit der Guy an der richtigen Stelle (x,y) weiterbaut
	}
}

let Scape = Array.from(Array(MAXYKACH), x => Array.from(Array(MAXXKACH), x => SCAPE()));
let Flusslauf = Array.from(Array(FLUSSANZAHL), x => Array.from(Array(MAXFLUSS), x => ({x:0,y:0})));

//Bilder
const Misc		= "MISC";
const Panel		= "PANEL";
const GuyAni	= "GUYANI";
const Animation = "ANIMATION";
const Schrift1	= "SCHRIFT1";
const Schrift2	= "SCHRIFT2";
const TextFeld	= "TEXTFELD";
const Papier	= "PAPIER";
const Baum		= "BAUM";
const Cursorbmp = "CURSORBMP";
const Buttons	= "BUTTONS";
const Inventarbmp="INVENTARBMP";
const Bau		= "BAU";
const Credits	= "CREDITS";
const Logo		= "LOGO";

let canvas = document.querySelector("#canvas");
let ctx = null;
let audioCtx = null;

function loadImage(url)
{
	let img = document.createElement("img");
	img.is_ready = false;
	img.onload = () => {
		img.is_ready = true;
	};
	img.src = url;
	return img;
}

function createSurface(w, h)
{
	let off = document.createElement("canvas");
	off.width = w;
	off.height = h;
	off.ctx = off.getContext("2d", {alpha: false});
	return off;
	//return off.getContext("2d", {alpha: false});
}

function InitDDraw()
{
    // Set the video mode to 800x600x16
	canvas.width = MAXX;
	canvas.height = MAXY;
	ctx = canvas.getContext("2d");
	canvas.ctx = ctx;

	//In diese Surface sollen die Bausteine geladen werden
	lpDDSMisc = loadImage(Misc);
	//In diese Surface sollen das Panel geladen werden
	lpDDSPanel = loadImage(Panel);
	//In diese Surface sollen die Animation der Figur gespeichert werden
	lpDDSGuyAni = loadImage(GuyAni);
	//In diese Surface sollen die Landschaftsanimationen gespeichert werden
	lpDDSAnimation = loadImage(Animation);
	//In diese Surface soll die Schrift1 gespeichert werden
	lpDDSSchrift1 = DDLoadBitmap(lpDD, Schrift1, 0, 0);
	//In diese Surface soll die Schrift2 gespeichert werden
	lpDDSSchrift2 = DDLoadBitmap(lpDD, Schrift2, 0, 0);
	//In diese Surface soll das Papier gespeichert werden
	lpDDSPapier = loadImage(Papier);
	//In diese Surface solln die B�ume gespeichert werden
	lpDDSBaum = loadImage(Baum);
	//In diese Surface solln die Cursor gespeichert werden
	lpDDSCursor = loadImage(Cursorbmp);
	//In diese Surface solln die Buttons gespeichert werden
	lpDDSButtons = loadImage(Buttons);
	//In diese Surface solln das TextFeld gespeichert werden
	lpDDSTextFeld = loadImage(TextFeld);
	//In diese Surface solln das Inventar gespeichert werden
	lpDDSInventar = loadImage(Inventarbmp);
	//In diese Surface solln die Bauwerke gespeichert werden
	lpDDSBau = loadImage(Bau);
	//In diese Surface solln die Credits gespeichert werden
	lpDDSCredits = loadImage(Credits);
	//In diese Surface solln das Logo gespeichert werden
	lpDDSLogo = loadImage(Logo);

	//In diese Surface soll die MiniMap gespeichert werden
	lpDDSKarte = createSurface(2*MAXXKACH, 2*MAXYKACH);
	//In diese Surface soll die Landschaft gespeichert werden
	lpDDSScape = createSurface(MAXSCAPEX, MAXSCAPEY);
	//In diese Surface soll die Schrift gespeichert werden
	lpDDSSchrift = createSurface(MAXX, MAXY);
	//In diese Surface soll die Schatzkarte gespeichert werden
	lpDDSSchatzkarte = createSurface(SKARTEX, SKARTEY);
}

function InitDSound()
{
	audioCtx = new AudioContext();
}

function LoadSound(Sound)
{
	fetch(Wav[Sound].Dateiname)
		.then(response => response.arrayBuffer())
		.then(buffer => audioCtx.decodeAudioData(buffer))
		.then(sound => lpdsbWav[Sound] = sound);

	//Die Standardlautstärke festlegen
	// lpdsbWav[Sound]->SetVolume((long)(-10000+100*Wav[Sound].Volume));
}

function PlaySound(Sound, Volume)
{
	if (lpdsbWav[Sound]) {
		const source = audioCtx.createBufferSource();
		source.buffer = lpdsbWav[Sound];
		source.connect(audioCtx.destination);
		source.start();
		source.buffer.src = source;
	}

	/*
	short z;

	if ((Sound == 0) || (Soundzustand <= 0)) return; 
	
	z = -10000+100*Wav[Sound].Volume;
	lpdsbWav[Sound]->SetVolume((long)(-10000+(10000+z)*Volume/100));  
	if (Wav[Sound].Loop) lpdsbWav[Sound]->Play(null,null,DSBPLAY_LOOPING);
	else lpdsbWav[Sound]->Play(null,null,null);
	 */
}

function StopSound(Sound)
{
	if (lpdsbWav[Sound]) {
		let src = lpdsbWav[Sound].src;
		if(src) {
			src.stop();
		}
	}
}

function SaveGame()
{
	let data = {
		Scape, Guy, BootsFahrt, Camera, Chance, Gitter, HauptMenue, LAnimation, Minuten, ScapeGrenze, SchatzPos,
		Spielzustand, Stunden, Tag, TextBereich, SchatzGef, Bmp
	};

	window.localStorage.setItem('save.dat', data);
}

function LoadGame()
{
	let data = window.localStorage.getItem('save.dat');
	if(!data) return false;

	Scape = data.Scape;
	Guy = data.Guy;
	BootsFahrt = data.BootsFahrt;
	Camera = data.Camera;
	Chance = data.Chance;
	Gitter = data.Gitter;
	HauptMenue = data.HauptMenue;
	LAnimation = data.LAnimation;
	Minuten = data.Minuten;
	ScapeGrenze = data.ScapeGrenze;
	SchatzPos = data.SchatzPos;
	Spielzustand = data.Spielzustand;
	Stunden = data.Stunden;
	Tag = data.Tag;
	TextBereich = data.TextBereich;
	SchatzGef = data.SchatzGef;
	Bmp = data.Bmp;

	return true;
}

function InitStructs()
{
	//BILD
	//Standardbildinitialisierung
	for (let i=0; i<BILDANZ; i++) {
		Bmp[i].Animation = false;
		Bmp[i].Anzahl = 0;
		Bmp[i].Geschwindigkeit = 0;
		Bmp[i].Phase = 0;
		Bmp[i].Surface = null;
		Bmp[i].rcSrc.left		= 0;
		Bmp[i].rcSrc.right		= 0;
		Bmp[i].rcSrc.top		= 0;
		Bmp[i].rcSrc.bottom	    = 0;
		Bmp[i].rcDes.left		= 0;
		Bmp[i].rcDes.right		= 0;
		Bmp[i].rcDes.top		= 0;
		Bmp[i].rcDes.bottom	    = 0;
		Bmp[i].Breite = 0;
		Bmp[i].Hoehe  = 0;
		Bmp[i].Sound  = 0;
		for (let k=0; k<BILDANZ; k++) Bmp[i].Rohstoff[k] = 0;
		Bmp[i].AkAnzahl	        = 0;
		Bmp[i].First			= true;
	}
	
	//Guy
	for(let i=GUYLINKS; i<=GUYUNTEN; i++) {
		Bmp[i].Animation = false;
		Bmp[i].Anzahl = 4;
		Bmp[i].Geschwindigkeit = 20;
		Bmp[i].Phase = 0;
		Bmp[i].Surface = lpDDSGuyAni;
		Bmp[i].rcSrc.left		= 7*(i-GUYLINKS);
		Bmp[i].rcSrc.right		= 7+7*(i-GUYLINKS);
		Bmp[i].rcSrc.top		= 0;
		Bmp[i].rcSrc.bottom	    = 18;
		Bmp[i].Breite = 7;
		Bmp[i].Hoehe  = 18;
	}

	for(let i=GUYSUCHEN; i<=GUYSCHLEUDER; i++) {
		Bmp[i].Animation = false;
		Bmp[i].Phase = 0;
		Bmp[i].Surface = lpDDSGuyAni;
	}

	Bmp[GUYSUCHEN].Anzahl = 4;
	Bmp[GUYSUCHEN].Geschwindigkeit = 4;
	Bmp[GUYSUCHEN].rcSrc.left		= 28;
	Bmp[GUYSUCHEN].rcSrc.right		= 39;
	Bmp[GUYSUCHEN].rcSrc.top		= 0;
	Bmp[GUYSUCHEN].rcSrc.bottom	    = 14;
	Bmp[GUYSUCHEN].Breite = 11;
	Bmp[GUYSUCHEN].Hoehe  = 14;
	Bmp[GUYSUCHEN].Sound  = WAVKNISTERN;
	
	Bmp[GUYESSEN].Anzahl	= 4;
	Bmp[GUYESSEN].Geschwindigkeit = 4;
	Bmp[GUYESSEN].rcSrc.left		= 39;
	Bmp[GUYESSEN].rcSrc.right		= 39+7;
	Bmp[GUYESSEN].rcSrc.top			= 0;
	Bmp[GUYESSEN].rcSrc.bottom	    = 17;
	Bmp[GUYESSEN].Breite = 7;
	Bmp[GUYESSEN].Hoehe  = 17;
	Bmp[GUYESSEN].Sound  = WAVKNISTERN;

	Bmp[GUYTRINKEN].Anzahl	= 5;
	Bmp[GUYTRINKEN].Geschwindigkeit = 4;
	Bmp[GUYTRINKEN].rcSrc.left		= 46;
	Bmp[GUYTRINKEN].rcSrc.right		= 46+9;
	Bmp[GUYTRINKEN].rcSrc.top			= 0;
	Bmp[GUYTRINKEN].rcSrc.bottom	    = 13;
	Bmp[GUYTRINKEN].Breite = 9;
	Bmp[GUYTRINKEN].Hoehe  = 13;
	Bmp[GUYTRINKEN].Sound = WAVTRINKEN;

	Bmp[GUYFAELLEN].Anzahl	= 4;
	Bmp[GUYFAELLEN].Geschwindigkeit = 6;
	Bmp[GUYFAELLEN].rcSrc.left		= 55;
	Bmp[GUYFAELLEN].rcSrc.right		= 55+15;
	Bmp[GUYFAELLEN].rcSrc.top			= 0;
	Bmp[GUYFAELLEN].rcSrc.bottom	    = 19;
	Bmp[GUYFAELLEN].Breite = 15;
	Bmp[GUYFAELLEN].Hoehe  = 19;
	Bmp[GUYFAELLEN].Sound = WAVFAELLEN;

	Bmp[GUYWARTEN].Anzahl	= 4;
	Bmp[GUYWARTEN].Geschwindigkeit = 2;
	Bmp[GUYWARTEN].rcSrc.left		= 70;
	Bmp[GUYWARTEN].rcSrc.right		= 70+7;
	Bmp[GUYWARTEN].rcSrc.top			= 0;
	Bmp[GUYWARTEN].rcSrc.bottom	    = 18;
	Bmp[GUYWARTEN].Breite = 7;
	Bmp[GUYWARTEN].Hoehe  = 18;
	
	Bmp[GUYFELD].Anzahl	= 4;
	Bmp[GUYFELD].Geschwindigkeit = 4;
	Bmp[GUYFELD].rcSrc.left		= 78;
	Bmp[GUYFELD].rcSrc.right		= 78+19;
	Bmp[GUYFELD].rcSrc.top			= 0;
	Bmp[GUYFELD].rcSrc.bottom	    = 18;
	Bmp[GUYFELD].Breite = 19;
	Bmp[GUYFELD].Hoehe  = 18;
	
	Bmp[GUYBINDENOBEN].Anzahl	= 2;
	Bmp[GUYBINDENOBEN].Geschwindigkeit = 1;
	Bmp[GUYBINDENOBEN].rcSrc.left		= 97;
	Bmp[GUYBINDENOBEN].rcSrc.right		= 97+8;
	Bmp[GUYBINDENOBEN].rcSrc.top			= 0;
	Bmp[GUYBINDENOBEN].rcSrc.bottom	    = 18;
	Bmp[GUYBINDENOBEN].Breite = 8;
	Bmp[GUYBINDENOBEN].Hoehe  = 18;

	Bmp[GUYBINDENUNTEN].Anzahl	= 2;
	Bmp[GUYBINDENUNTEN].Geschwindigkeit = 1;
	Bmp[GUYBINDENUNTEN].rcSrc.left		= 98;
	Bmp[GUYBINDENUNTEN].rcSrc.right		= 98+7;
	Bmp[GUYBINDENUNTEN].rcSrc.top			= 36;
	Bmp[GUYBINDENUNTEN].rcSrc.bottom	    = 36+18;
	Bmp[GUYBINDENUNTEN].Breite = 7;
	Bmp[GUYBINDENUNTEN].Hoehe  = 18;

	Bmp[GUYSCHLAFZELT].Anzahl	= 2;
	Bmp[GUYSCHLAFZELT].Geschwindigkeit = 1;
	Bmp[GUYSCHLAFZELT].rcSrc.left		= 105;
	Bmp[GUYSCHLAFZELT].rcSrc.right		= 105+20;
	Bmp[GUYSCHLAFZELT].rcSrc.top		= 54;
	Bmp[GUYSCHLAFZELT].rcSrc.bottom	    = 54+10;
	Bmp[GUYSCHLAFZELT].Breite = 20;
	Bmp[GUYSCHLAFZELT].Hoehe  = 10;
	Bmp[GUYSCHLAFZELT].Sound  = WAVSCHNARCHEN;

	Bmp[GUYSCHLAFEN].Anzahl	= 2;
	Bmp[GUYSCHLAFEN].Geschwindigkeit = 1;
	Bmp[GUYSCHLAFEN].rcSrc.left		= 125;
	Bmp[GUYSCHLAFEN].rcSrc.right		= 125+17;
	Bmp[GUYSCHLAFEN].rcSrc.top		= 36;
	Bmp[GUYSCHLAFEN].rcSrc.bottom	    = 36+18;
	Bmp[GUYSCHLAFEN].Breite = 17;
	Bmp[GUYSCHLAFEN].Hoehe  = 18;
	Bmp[GUYSCHLAFEN].Sound  = WAVSCHNARCHEN;

	Bmp[GUYGEHINZELT].Anzahl	= 3;
	Bmp[GUYGEHINZELT].Geschwindigkeit = 4;
	Bmp[GUYGEHINZELT].rcSrc.left		= 105;
	Bmp[GUYGEHINZELT].rcSrc.right		= 105+7;
	Bmp[GUYGEHINZELT].rcSrc.top		= 0;
	Bmp[GUYGEHINZELT].rcSrc.bottom	    = 0+18;
	Bmp[GUYGEHINZELT].Breite = 7;
	Bmp[GUYGEHINZELT].Hoehe  = 18;

	Bmp[GUYHINLEGEN].Anzahl			 = 2;
	Bmp[GUYHINLEGEN].Geschwindigkeit = 2;
	Bmp[GUYHINLEGEN].rcSrc.left		 = 125;
	Bmp[GUYHINLEGEN].rcSrc.right	 = 125+17;
	Bmp[GUYHINLEGEN].rcSrc.top		 = 0;
	Bmp[GUYHINLEGEN].rcSrc.bottom	 = 0+18;
	Bmp[GUYHINLEGEN].Breite			 = 17;
	Bmp[GUYHINLEGEN].Hoehe			 = 18;

	Bmp[GUYAUFSTEHEN].Anzahl	= 2;
	Bmp[GUYAUFSTEHEN].Geschwindigkeit = 2;
	Bmp[GUYAUFSTEHEN].rcSrc.left		= 142;
	Bmp[GUYAUFSTEHEN].rcSrc.right		= 142+9;
	Bmp[GUYAUFSTEHEN].rcSrc.top			= 0;
	Bmp[GUYAUFSTEHEN].rcSrc.bottom	    = 0+18;
	Bmp[GUYAUFSTEHEN].Breite = 9;
	Bmp[GUYAUFSTEHEN].Hoehe  = 18;

	Bmp[GUYANGELN1LINKS].Anzahl	= 6;
	Bmp[GUYANGELN1LINKS].Geschwindigkeit = 6;
	Bmp[GUYANGELN1LINKS].rcSrc.left		= 151;
	Bmp[GUYANGELN1LINKS].rcSrc.right		= 151+16;
	Bmp[GUYANGELN1LINKS].rcSrc.top			= 0;
	Bmp[GUYANGELN1LINKS].rcSrc.bottom	    = 0+17;
	Bmp[GUYANGELN1LINKS].Breite = 16;
	Bmp[GUYANGELN1LINKS].Hoehe  = 17;

	Bmp[GUYANGELN1OBEN].Anzahl	= 6;
	Bmp[GUYANGELN1OBEN].Geschwindigkeit = 6;
	Bmp[GUYANGELN1OBEN].rcSrc.left		= 167;
	Bmp[GUYANGELN1OBEN].rcSrc.right		= 167+16;
	Bmp[GUYANGELN1OBEN].rcSrc.top			= 0;
	Bmp[GUYANGELN1OBEN].rcSrc.bottom	    = 0+17;
	Bmp[GUYANGELN1OBEN].Breite = 16;
	Bmp[GUYANGELN1OBEN].Hoehe  = 17;

	Bmp[GUYANGELN1RECHTS].Anzahl	= 6;
	Bmp[GUYANGELN1RECHTS].Geschwindigkeit = 6;
	Bmp[GUYANGELN1RECHTS].rcSrc.left		= 183;
	Bmp[GUYANGELN1RECHTS].rcSrc.right		= 183+14;
	Bmp[GUYANGELN1RECHTS].rcSrc.top			= 0;
	Bmp[GUYANGELN1RECHTS].rcSrc.bottom	    = 0+17;
	Bmp[GUYANGELN1RECHTS].Breite = 14;
	Bmp[GUYANGELN1RECHTS].Hoehe  = 17;

	Bmp[GUYANGELN1UNTEN].Anzahl	= 6;
	Bmp[GUYANGELN1UNTEN].Geschwindigkeit = 6;
	Bmp[GUYANGELN1UNTEN].rcSrc.left		= 197;
	Bmp[GUYANGELN1UNTEN].rcSrc.right		= 197+14;
	Bmp[GUYANGELN1UNTEN].rcSrc.top			= 0;
	Bmp[GUYANGELN1UNTEN].rcSrc.bottom	    = 0+17;
	Bmp[GUYANGELN1UNTEN].Breite = 14;
	Bmp[GUYANGELN1UNTEN].Hoehe  = 17;

	Bmp[GUYANGELN2LINKS].Anzahl	= 4;
	Bmp[GUYANGELN2LINKS].Geschwindigkeit = 3;
	Bmp[GUYANGELN2LINKS].rcSrc.left		= 211;
	Bmp[GUYANGELN2LINKS].rcSrc.right		= 211+16;
	Bmp[GUYANGELN2LINKS].rcSrc.top			= 0;
	Bmp[GUYANGELN2LINKS].rcSrc.bottom	    = 0+16;
	Bmp[GUYANGELN2LINKS].Breite = 16;
	Bmp[GUYANGELN2LINKS].Hoehe  = 16;

	Bmp[GUYANGELN2OBEN].Anzahl	= 4;
	Bmp[GUYANGELN2OBEN].Geschwindigkeit = 3;
	Bmp[GUYANGELN2OBEN].rcSrc.left		= 227;
	Bmp[GUYANGELN2OBEN].rcSrc.right		= 227+16;
	Bmp[GUYANGELN2OBEN].rcSrc.top			= 0;
	Bmp[GUYANGELN2OBEN].rcSrc.bottom	    = 0+16;
	Bmp[GUYANGELN2OBEN].Breite = 16;
	Bmp[GUYANGELN2OBEN].Hoehe  = 16;

	Bmp[GUYANGELN2RECHTS].Anzahl	= 4;
	Bmp[GUYANGELN2RECHTS].Geschwindigkeit = 3;
	Bmp[GUYANGELN2RECHTS].rcSrc.left		= 243;
	Bmp[GUYANGELN2RECHTS].rcSrc.right		= 243+14;
	Bmp[GUYANGELN2RECHTS].rcSrc.top			= 0;
	Bmp[GUYANGELN2RECHTS].rcSrc.bottom	    = 0+15;
	Bmp[GUYANGELN2RECHTS].Breite = 14;
	Bmp[GUYANGELN2RECHTS].Hoehe  = 15;

	Bmp[GUYANGELN2UNTEN].Anzahl	= 4;
	Bmp[GUYANGELN2UNTEN].Geschwindigkeit = 3;
	Bmp[GUYANGELN2UNTEN].rcSrc.left		= 257;
	Bmp[GUYANGELN2UNTEN].rcSrc.right		= 257+14;
	Bmp[GUYANGELN2UNTEN].rcSrc.top			= 0;
	Bmp[GUYANGELN2UNTEN].rcSrc.bottom	    = 0+15;
	Bmp[GUYANGELN2UNTEN].Breite = 14;
	Bmp[GUYANGELN2UNTEN].Hoehe  = 15;

	Bmp[GUYANGELN3LINKS].Anzahl	= 3;
	Bmp[GUYANGELN3LINKS].Geschwindigkeit = 2;
	Bmp[GUYANGELN3LINKS].rcSrc.left		= 271;
	Bmp[GUYANGELN3LINKS].rcSrc.right		= 271+16;
	Bmp[GUYANGELN3LINKS].rcSrc.top			= 0;
	Bmp[GUYANGELN3LINKS].rcSrc.bottom	    = 0+16;
	Bmp[GUYANGELN3LINKS].Breite = 16;
	Bmp[GUYANGELN3LINKS].Hoehe  = 16;

	Bmp[GUYANGELN3OBEN].Anzahl	= 3;
	Bmp[GUYANGELN3OBEN].Geschwindigkeit = 2;
	Bmp[GUYANGELN3OBEN].rcSrc.left		= 285;
	Bmp[GUYANGELN3OBEN].rcSrc.right		= 285+16;
	Bmp[GUYANGELN3OBEN].rcSrc.top			= 0;
	Bmp[GUYANGELN3OBEN].rcSrc.bottom	    = 0+16;
	Bmp[GUYANGELN3OBEN].Breite = 16;
	Bmp[GUYANGELN3OBEN].Hoehe  = 16;

	Bmp[GUYANGELN3RECHTS].Anzahl	= 3;
	Bmp[GUYANGELN3RECHTS].Geschwindigkeit = 2;
	Bmp[GUYANGELN3RECHTS].rcSrc.left		= 299;
	Bmp[GUYANGELN3RECHTS].rcSrc.right		= 299+14;
	Bmp[GUYANGELN3RECHTS].rcSrc.top			= 0;
	Bmp[GUYANGELN3RECHTS].rcSrc.bottom	    = 0+15;
	Bmp[GUYANGELN3RECHTS].Breite = 14;
	Bmp[GUYANGELN3RECHTS].Hoehe  = 15;

	Bmp[GUYANGELN3UNTEN].Anzahl	= 3;
	Bmp[GUYANGELN3UNTEN].Geschwindigkeit = 2;
	Bmp[GUYANGELN3UNTEN].rcSrc.left		= 313;
	Bmp[GUYANGELN3UNTEN].rcSrc.right		= 313+14;
	Bmp[GUYANGELN3UNTEN].rcSrc.top			= 0;
	Bmp[GUYANGELN3UNTEN].rcSrc.bottom	    = 0+15;
	Bmp[GUYANGELN3UNTEN].Breite = 14;
	Bmp[GUYANGELN3UNTEN].Hoehe  = 15;

	Bmp[GUYSCHLAGEN].Anzahl	= 4;
	Bmp[GUYSCHLAGEN].Geschwindigkeit = 7;
	Bmp[GUYSCHLAGEN].rcSrc.left		= 327;
	Bmp[GUYSCHLAGEN].rcSrc.right		= 327+12;
	Bmp[GUYSCHLAGEN].rcSrc.top			= 0;
	Bmp[GUYSCHLAGEN].rcSrc.bottom	    = 0+24;
	Bmp[GUYSCHLAGEN].Breite = 12;
	Bmp[GUYSCHLAGEN].Hoehe  = 24;
	Bmp[GUYSCHLAGEN].Sound = WAVSCHLAGEN;
	
	Bmp[GUYBOOTLINKS].Anzahl	= 6;
	Bmp[GUYBOOTLINKS].Geschwindigkeit = 10;
	Bmp[GUYBOOTLINKS].rcSrc.left		= 339;
	Bmp[GUYBOOTLINKS].rcSrc.right		= 339+26;
	Bmp[GUYBOOTLINKS].rcSrc.top			= 0;
	Bmp[GUYBOOTLINKS].rcSrc.bottom	    = 0+21;
	Bmp[GUYBOOTLINKS].Breite = 26;
	Bmp[GUYBOOTLINKS].Hoehe  = 21;

	Bmp[GUYBOOTOBEN].Anzahl	= 6;
	Bmp[GUYBOOTOBEN].Geschwindigkeit = 10;
	Bmp[GUYBOOTOBEN].rcSrc.left		= 365;
	Bmp[GUYBOOTOBEN].rcSrc.right		= 365+26;
	Bmp[GUYBOOTOBEN].rcSrc.top			= 0;
	Bmp[GUYBOOTOBEN].rcSrc.bottom	    = 0+21;
	Bmp[GUYBOOTOBEN].Breite = 26;
	Bmp[GUYBOOTOBEN].Hoehe  = 21;

	Bmp[GUYBOOTRECHTS].Anzahl	= 6;
	Bmp[GUYBOOTRECHTS].Geschwindigkeit = 10;
	Bmp[GUYBOOTRECHTS].rcSrc.left		= 391;
	Bmp[GUYBOOTRECHTS].rcSrc.right		= 391+26;
	Bmp[GUYBOOTRECHTS].rcSrc.top			= 0;
	Bmp[GUYBOOTRECHTS].rcSrc.bottom	    = 0+21;
	Bmp[GUYBOOTRECHTS].Breite = 26;
	Bmp[GUYBOOTRECHTS].Hoehe  = 21;

	Bmp[GUYBOOTUNTEN].Anzahl	= 6;
	Bmp[GUYBOOTUNTEN].Geschwindigkeit = 10;
	Bmp[GUYBOOTUNTEN].rcSrc.left		= 417;
	Bmp[GUYBOOTUNTEN].rcSrc.right		= 417+26;
	Bmp[GUYBOOTUNTEN].rcSrc.top			= 0;
	Bmp[GUYBOOTUNTEN].rcSrc.bottom	    = 0+21;
	Bmp[GUYBOOTUNTEN].Breite = 26;
	Bmp[GUYBOOTUNTEN].Hoehe  = 21;

	Bmp[GUYBOOTANGELN1].Anzahl	= 6;
	Bmp[GUYBOOTANGELN1].Geschwindigkeit = 6;
	Bmp[GUYBOOTANGELN1].rcSrc.left		= 443;
	Bmp[GUYBOOTANGELN1].rcSrc.right		= 443+26;
	Bmp[GUYBOOTANGELN1].rcSrc.top			= 0;
	Bmp[GUYBOOTANGELN1].rcSrc.bottom	    = 0+25;
	Bmp[GUYBOOTANGELN1].Breite = 26;
	Bmp[GUYBOOTANGELN1].Hoehe  = 25;

	Bmp[GUYBOOTANGELN2].Anzahl	= 4;
	Bmp[GUYBOOTANGELN2].Geschwindigkeit = 3;
	Bmp[GUYBOOTANGELN2].rcSrc.left		= 469;
	Bmp[GUYBOOTANGELN2].rcSrc.right		= 469+26;
	Bmp[GUYBOOTANGELN2].rcSrc.top			= 0;
	Bmp[GUYBOOTANGELN2].rcSrc.bottom	    = 0+25;
	Bmp[GUYBOOTANGELN2].Breite = 26;
	Bmp[GUYBOOTANGELN2].Hoehe  = 25;

	Bmp[GUYBOOTANGELN3].Anzahl	= 3;
	Bmp[GUYBOOTANGELN3].Geschwindigkeit = 2;
	Bmp[GUYBOOTANGELN3].rcSrc.left		= 495;
	Bmp[GUYBOOTANGELN3].rcSrc.right		= 495+26;
	Bmp[GUYBOOTANGELN3].rcSrc.top			= 0;
	Bmp[GUYBOOTANGELN3].rcSrc.bottom	    = 0+25;
	Bmp[GUYBOOTANGELN3].Breite = 26;
	Bmp[GUYBOOTANGELN3].Hoehe  = 25;

	Bmp[GUYTAUCHEN1].Anzahl	= 5;
	Bmp[GUYTAUCHEN1].Geschwindigkeit = 5;
	Bmp[GUYTAUCHEN1].rcSrc.left		= 521;
	Bmp[GUYTAUCHEN1].rcSrc.right		= 521+26;
	Bmp[GUYTAUCHEN1].rcSrc.top			= 0;
	Bmp[GUYTAUCHEN1].rcSrc.bottom	    = 0+27;
	Bmp[GUYTAUCHEN1].Breite = 26;
	Bmp[GUYTAUCHEN1].Hoehe  = 27;
	
	Bmp[GUYTAUCHEN2].Anzahl	= 4;
	Bmp[GUYTAUCHEN2].Geschwindigkeit = 3;
	Bmp[GUYTAUCHEN2].rcSrc.left		= 547;
	Bmp[GUYTAUCHEN2].rcSrc.right		= 547+26;
	Bmp[GUYTAUCHEN2].rcSrc.top			= 0;
	Bmp[GUYTAUCHEN2].rcSrc.bottom	    = 0+17;
	Bmp[GUYTAUCHEN2].Breite = 26;
	Bmp[GUYTAUCHEN2].Hoehe  = 17;

	Bmp[GUYTAUCHEN3].Anzahl	= 2;
	Bmp[GUYTAUCHEN3].Geschwindigkeit = 2;
	Bmp[GUYTAUCHEN3].rcSrc.left		= 573;
	Bmp[GUYTAUCHEN3].rcSrc.right		= 573+26;
	Bmp[GUYTAUCHEN3].rcSrc.top			= 0;
	Bmp[GUYTAUCHEN3].rcSrc.bottom	    = 0+17;
	Bmp[GUYTAUCHEN3].Breite = 26;
	Bmp[GUYTAUCHEN3].Hoehe  = 17;

	Bmp[GUYHAMMER].Anzahl	= 2;
	Bmp[GUYHAMMER].Geschwindigkeit = 4;
	Bmp[GUYHAMMER].rcSrc.left		= 599;
	Bmp[GUYHAMMER].rcSrc.right		= 599+9;
	Bmp[GUYHAMMER].rcSrc.top			= 0;
	Bmp[GUYHAMMER].rcSrc.bottom	    = 0+18;
	Bmp[GUYHAMMER].Breite = 9;
	Bmp[GUYHAMMER].Hoehe  = 18;
	Bmp[GUYHAMMER].Sound  = WAVHAMMER;

	Bmp[GUYKLETTERN1].Anzahl	= 6;
	Bmp[GUYKLETTERN1].Geschwindigkeit = 2;
	Bmp[GUYKLETTERN1].rcSrc.left		= 608;
	Bmp[GUYKLETTERN1].rcSrc.right		= 608+7;
	Bmp[GUYKLETTERN1].rcSrc.top			= 0;
	Bmp[GUYKLETTERN1].rcSrc.bottom	    = 0+34;
	Bmp[GUYKLETTERN1].Breite = 7;
	Bmp[GUYKLETTERN1].Hoehe  = 34;

	Bmp[GUYKLETTERN2].Anzahl	= 6;
	Bmp[GUYKLETTERN2].Geschwindigkeit = 2;
	Bmp[GUYKLETTERN2].rcSrc.left		= 615;
	Bmp[GUYKLETTERN2].rcSrc.right		= 615+7;
	Bmp[GUYKLETTERN2].rcSrc.top			= 0;
	Bmp[GUYKLETTERN2].rcSrc.bottom	    = 0+34;
	Bmp[GUYKLETTERN2].Breite = 7;
	Bmp[GUYKLETTERN2].Hoehe  = 34;

	Bmp[GUYHAMMER2].Anzahl	= 2;
	Bmp[GUYHAMMER2].Geschwindigkeit = 4;
	Bmp[GUYHAMMER2].rcSrc.left		= 622;
	Bmp[GUYHAMMER2].rcSrc.right		= 622+7;
	Bmp[GUYHAMMER2].rcSrc.top			= 0;
	Bmp[GUYHAMMER2].rcSrc.bottom	    = 0+34;
	Bmp[GUYHAMMER2].Breite = 7;
	Bmp[GUYHAMMER2].Hoehe  = 34;
	Bmp[GUYHAMMER2].Sound  = WAVHAMMER;

	Bmp[GUYGEHINHAUS].Anzahl	= 3;
	Bmp[GUYGEHINHAUS].Geschwindigkeit = 2;
	Bmp[GUYGEHINHAUS].rcSrc.left		= 631;
	Bmp[GUYGEHINHAUS].rcSrc.right		= 631+9;
	Bmp[GUYGEHINHAUS].rcSrc.top			= 0;
	Bmp[GUYGEHINHAUS].rcSrc.bottom	    = 0+34;
	Bmp[GUYGEHINHAUS].Breite = 9;
	Bmp[GUYGEHINHAUS].Hoehe  = 34;

	Bmp[GUYSCHLAFHAUS].Anzahl	= 2;
	Bmp[GUYSCHLAFHAUS].Geschwindigkeit = 1;
	Bmp[GUYSCHLAFHAUS].rcSrc.left		= 640;
	Bmp[GUYSCHLAFHAUS].rcSrc.right		= 640+10;
	Bmp[GUYSCHLAFHAUS].rcSrc.top			= 0;
	Bmp[GUYSCHLAFHAUS].rcSrc.bottom	    = 0+34;
	Bmp[GUYSCHLAFHAUS].Breite = 10;
	Bmp[GUYSCHLAFHAUS].Hoehe  = 34;
	Bmp[GUYSCHLAFHAUS].Sound  = WAVSCHNARCHEN;
	
	Bmp[GUYGEHAUSHAUS].Anzahl	= 3;
	Bmp[GUYGEHAUSHAUS].Geschwindigkeit = 2;
	Bmp[GUYGEHAUSHAUS].rcSrc.left		= 650;
	Bmp[GUYGEHAUSHAUS].rcSrc.right		= 650+9;
	Bmp[GUYGEHAUSHAUS].rcSrc.top			= 0;
	Bmp[GUYGEHAUSHAUS].rcSrc.bottom	    = 0+34;
	Bmp[GUYGEHAUSHAUS].Breite = 9;
	Bmp[GUYGEHAUSHAUS].Hoehe  = 34;

	Bmp[GUYANZUENDEN].Anzahl	= 6;
	Bmp[GUYANZUENDEN].Geschwindigkeit = 5;
	Bmp[GUYANZUENDEN].rcSrc.left		= 659;
	Bmp[GUYANZUENDEN].rcSrc.right		= 659+19;
	Bmp[GUYANZUENDEN].rcSrc.top			= 0;
	Bmp[GUYANZUENDEN].rcSrc.bottom	    = 0+18;
	Bmp[GUYANZUENDEN].Breite = 19;
	Bmp[GUYANZUENDEN].Hoehe  = 18;

	Bmp[GUYAUSSCHAU].Anzahl	= 4;
	Bmp[GUYAUSSCHAU].Geschwindigkeit = 1;
	Bmp[GUYAUSSCHAU].rcSrc.left		= 678;
	Bmp[GUYAUSSCHAU].rcSrc.right		= 678+10;
	Bmp[GUYAUSSCHAU].rcSrc.top			= 0;
	Bmp[GUYAUSSCHAU].rcSrc.bottom	    = 0+18;
	Bmp[GUYAUSSCHAU].Breite = 10;
	Bmp[GUYAUSSCHAU].Hoehe  = 18;

	Bmp[GUYSCHAUFELN].Anzahl	= 10;
	Bmp[GUYSCHAUFELN].Geschwindigkeit = 3;
	Bmp[GUYSCHAUFELN].rcSrc.left		= 688;
	Bmp[GUYSCHAUFELN].rcSrc.right		= 688+17;
	Bmp[GUYSCHAUFELN].rcSrc.top			= 0;
	Bmp[GUYSCHAUFELN].rcSrc.bottom	    = 0+19;
	Bmp[GUYSCHAUFELN].Breite = 17;
	Bmp[GUYSCHAUFELN].Hoehe  = 19;
	Bmp[GUYSCHAUFELN].Sound  = WAVSCHAUFELN;

	Bmp[GUYSCHIFF].Anzahl	= 4;
	Bmp[GUYSCHIFF].Geschwindigkeit  = 10;
	Bmp[GUYSCHIFF].rcSrc.left		= 297;
	Bmp[GUYSCHIFF].rcSrc.right		= 297+48;
	Bmp[GUYSCHIFF].rcSrc.top		= 0;
	Bmp[GUYSCHIFF].rcSrc.bottom	    = 0+38;
	Bmp[GUYSCHIFF].Breite = 48;
	Bmp[GUYSCHIFF].Hoehe  = 38;
	Bmp[GUYSCHIFF].Surface = lpDDSBau;
	Bmp[GUYSCHIFF].Sound = WAVSTURM;

	Bmp[GUYSCHIFFDOWN].Anzahl	= 6;
	Bmp[GUYSCHIFFDOWN].Geschwindigkeit  = 3;
	Bmp[GUYSCHIFFDOWN].rcSrc.left		= 345;
	Bmp[GUYSCHIFFDOWN].rcSrc.right		= 345+46;
	Bmp[GUYSCHIFFDOWN].rcSrc.top		= 0;
	Bmp[GUYSCHIFFDOWN].rcSrc.bottom	    = 0+40;
	Bmp[GUYSCHIFFDOWN].Breite = 46;
	Bmp[GUYSCHIFFDOWN].Hoehe  = 40;
	Bmp[GUYSCHIFFDOWN].Surface = lpDDSBau;
	Bmp[GUYSCHIFFDOWN].Sound  = WAVPLATSCH;

	Bmp[GUYSCHWIMMEN].Anzahl	= 4;
	Bmp[GUYSCHWIMMEN].Geschwindigkeit  = 10;
	Bmp[GUYSCHWIMMEN].rcSrc.left		= 705;
	Bmp[GUYSCHWIMMEN].rcSrc.right		= 705+15;
	Bmp[GUYSCHWIMMEN].rcSrc.top		= 0;
	Bmp[GUYSCHWIMMEN].rcSrc.bottom	    = 0+9;
	Bmp[GUYSCHWIMMEN].Breite = 15;
	Bmp[GUYSCHWIMMEN].Hoehe  = 9;
	Bmp[GUYSCHWIMMEN].Sound  = WAVSCHWIMMEN;

	Bmp[GUYTOD].Anzahl	= 6;
	Bmp[GUYTOD].Geschwindigkeit  = 1;
	Bmp[GUYTOD].rcSrc.left		= 743;
	Bmp[GUYTOD].rcSrc.right		= 743+16;
	Bmp[GUYTOD].rcSrc.top		= 0;
	Bmp[GUYTOD].rcSrc.bottom	    = 0+10;
	Bmp[GUYTOD].Breite = 16;
	Bmp[GUYTOD].Hoehe  = 10;

	Bmp[GUYBOOTTOD].Anzahl	= 6;
	Bmp[GUYBOOTTOD].Geschwindigkeit  = 1;
	Bmp[GUYBOOTTOD].rcSrc.left		= 759;
	Bmp[GUYBOOTTOD].rcSrc.right		= 759+26;
	Bmp[GUYBOOTTOD].rcSrc.top		= 0;
	Bmp[GUYBOOTTOD].rcSrc.bottom	    = 0+18;
	Bmp[GUYBOOTTOD].Breite = 26;
	Bmp[GUYBOOTTOD].Hoehe  = 18;

	Bmp[GUYBOOTWARTEN].Anzahl	= 4;
	Bmp[GUYBOOTWARTEN].Geschwindigkeit  = 2;
	Bmp[GUYBOOTWARTEN].rcSrc.left		= 0;
	Bmp[GUYBOOTWARTEN].rcSrc.right		= 0+26;
	Bmp[GUYBOOTWARTEN].rcSrc.top		= 72;
	Bmp[GUYBOOTWARTEN].rcSrc.bottom	    = 72+18;
	Bmp[GUYBOOTWARTEN].Breite = 26;
	Bmp[GUYBOOTWARTEN].Hoehe  = 20;

	Bmp[GUYSCHLEUDER].Anzahl	= 5;
	Bmp[GUYSCHLEUDER].Geschwindigkeit  = 4;
	Bmp[GUYSCHLEUDER].rcSrc.left		= 720;
	Bmp[GUYSCHLEUDER].rcSrc.right		= 720+23;
	Bmp[GUYSCHLEUDER].rcSrc.top		= 0;
	Bmp[GUYSCHLEUDER].rcSrc.bottom	    = 0+20;
	Bmp[GUYSCHLEUDER].Breite = 23;
	Bmp[GUYSCHLEUDER].Hoehe  = 20;
	
	//Cursor
	for(let i=CUPFEIL; i<=CUUHR; i++) {
		Bmp[i].Animation = false;
		Bmp[i].Anzahl = 1;
		Bmp[i].Geschwindigkeit = 0;
		Bmp[i].Phase = 0;
		Bmp[i].Surface = lpDDSCursor;
		Bmp[i].rcSrc.left		= (i-CUPFEIL)*18;
		Bmp[i].rcSrc.top		= 0;
		Bmp[i].rcSrc.right		= Bmp[i].rcSrc.left+18;
		Bmp[i].rcSrc.bottom	    = 18;
		Bmp[i].Breite = 18;
		Bmp[i].Hoehe  = 18;
	}
	
	//Landschaftsanimationen
	for(let i=MEERWELLEN; i<=SCHLEUSE6; i++) {
		Bmp[i].Animation = true;
		Bmp[i].Anzahl = 7;
		Bmp[i].Geschwindigkeit = 7;
		Bmp[i].Phase = 0;
		Bmp[i].Surface = lpDDSAnimation;
		Bmp[i].Sound = WAVFLUSS;
	}

	Bmp[MEERWELLEN].Geschwindigkeit = 3;
	Bmp[MEERWELLEN].Breite = 28;
	Bmp[MEERWELLEN].Hoehe  = 13;
	Bmp[MEERWELLEN].rcSrc.left		= 0;
	Bmp[MEERWELLEN].rcSrc.right		= Bmp[MEERWELLEN].rcSrc.left+Bmp[MEERWELLEN].Breite;
	Bmp[MEERWELLEN].rcSrc.top		= 0;
	Bmp[MEERWELLEN].rcSrc.bottom 	= Bmp[MEERWELLEN].rcSrc.top +Bmp[MEERWELLEN].Hoehe;
	Bmp[MEERWELLEN].rcDes.left		= 9;
	Bmp[MEERWELLEN].rcDes.right		= Bmp[MEERWELLEN].rcDes.left+Bmp[MEERWELLEN].Breite;
	Bmp[MEERWELLEN].rcDes.top		= 23;
	Bmp[MEERWELLEN].rcDes.bottom 	= Bmp[MEERWELLEN].rcDes.top +Bmp[MEERWELLEN].Hoehe;
	Bmp[MEERWELLEN].Sound			= WAVBRANDUNG;	

	Bmp[FLUSS1].Breite = 34;
	Bmp[FLUSS1].Hoehe  = 8;
	Bmp[FLUSS1].rcSrc.left		= 28;
	Bmp[FLUSS1].rcSrc.right		= Bmp[FLUSS1].rcSrc.left+Bmp[FLUSS1].Breite;
	Bmp[FLUSS1].rcSrc.top		= 0;
	Bmp[FLUSS1].rcSrc.bottom 	= Bmp[FLUSS1].rcSrc.top +Bmp[FLUSS1].Hoehe;
	Bmp[FLUSS1].rcDes.left		= 10;
	Bmp[FLUSS1].rcDes.right		= Bmp[FLUSS1].rcDes.left+Bmp[FLUSS1].Breite;
	Bmp[FLUSS1].rcDes.top		= 18;
	Bmp[FLUSS1].rcDes.bottom 	= Bmp[FLUSS1].rcDes.top +Bmp[FLUSS1].Hoehe;

	Bmp[FLUSS2].Breite = 34;
	Bmp[FLUSS2].Hoehe  = 8;
	Bmp[FLUSS2].rcSrc.left		= 62;
	Bmp[FLUSS2].rcSrc.right		= Bmp[FLUSS2].rcSrc.left+Bmp[FLUSS2].Breite;
	Bmp[FLUSS2].rcSrc.top		= 0;
	Bmp[FLUSS2].rcSrc.bottom 	= Bmp[FLUSS2].rcSrc.top +Bmp[FLUSS2].Hoehe;
	Bmp[FLUSS2].rcDes.left		= 10;
	Bmp[FLUSS2].rcDes.right		= Bmp[FLUSS2].rcDes.left+Bmp[FLUSS2].Breite;
	Bmp[FLUSS2].rcDes.top		= 19;
	Bmp[FLUSS2].rcDes.bottom 	= Bmp[FLUSS2].rcDes.top +Bmp[FLUSS2].Hoehe;

	Bmp[FLUSS3].Breite = 34;
	Bmp[FLUSS3].Hoehe  = 34;
	Bmp[FLUSS3].rcSrc.left		= 96;
	Bmp[FLUSS3].rcSrc.right		= Bmp[FLUSS3].rcSrc.left+Bmp[FLUSS3].Breite;
	Bmp[FLUSS3].rcSrc.top		= 0;
	Bmp[FLUSS3].rcSrc.bottom 	= Bmp[FLUSS3].rcSrc.top +Bmp[FLUSS3].Hoehe;
	Bmp[FLUSS3].rcDes.left		= 10;
	Bmp[FLUSS3].rcDes.right		= Bmp[FLUSS3].rcDes.left+Bmp[FLUSS3].Breite;
	Bmp[FLUSS3].rcDes.top		= 5;
	Bmp[FLUSS3].rcDes.bottom 	= Bmp[FLUSS3].rcDes.top +Bmp[FLUSS3].Hoehe;

	Bmp[FLUSS4].Breite = 34;
	Bmp[FLUSS4].Hoehe  = 34;
	Bmp[FLUSS4].rcSrc.left		= 130;
	Bmp[FLUSS4].rcSrc.right		= Bmp[FLUSS4].rcSrc.left+Bmp[FLUSS4].Breite;
	Bmp[FLUSS4].rcSrc.top		= 0;
	Bmp[FLUSS4].rcSrc.bottom 	= Bmp[FLUSS4].rcSrc.top +Bmp[FLUSS4].Hoehe;
	Bmp[FLUSS4].rcDes.left		= 10;
	Bmp[FLUSS4].rcDes.right		= Bmp[FLUSS4].rcDes.left+Bmp[FLUSS4].Breite;
	Bmp[FLUSS4].rcDes.top		= 5;
	Bmp[FLUSS4].rcDes.bottom 	= Bmp[FLUSS4].rcDes.top +Bmp[FLUSS4].Hoehe;

	Bmp[FLUSS5].Breite = 34;
	Bmp[FLUSS5].Hoehe  = 18;
	Bmp[FLUSS5].rcSrc.left		= 164;
	Bmp[FLUSS5].rcSrc.right		= Bmp[FLUSS5].rcSrc.left+Bmp[FLUSS5].Breite;
	Bmp[FLUSS5].rcSrc.top		= 0;
	Bmp[FLUSS5].rcSrc.bottom 	= Bmp[FLUSS5].rcSrc.top +Bmp[FLUSS5].Hoehe;
	Bmp[FLUSS5].rcDes.left		= 10;
	Bmp[FLUSS5].rcDes.right		= Bmp[FLUSS5].rcDes.left+Bmp[FLUSS5].Breite;
	Bmp[FLUSS5].rcDes.top		= 21;
	Bmp[FLUSS5].rcDes.bottom 	= Bmp[FLUSS5].rcDes.top +Bmp[FLUSS5].Hoehe;

	Bmp[FLUSS6].Breite = 34;
	Bmp[FLUSS6].Hoehe  = 18;
	Bmp[FLUSS6].rcSrc.left		= 198;
	Bmp[FLUSS6].rcSrc.right		= Bmp[FLUSS6].rcSrc.left+Bmp[FLUSS6].Breite;
	Bmp[FLUSS6].rcSrc.top		= 0;
	Bmp[FLUSS6].rcSrc.bottom 	= Bmp[FLUSS6].rcSrc.top +Bmp[FLUSS6].Hoehe;
	Bmp[FLUSS6].rcDes.left		= 10;
	Bmp[FLUSS6].rcDes.right		= Bmp[FLUSS6].rcDes.left+Bmp[FLUSS6].Breite;
	Bmp[FLUSS6].rcDes.top		= 21;
	Bmp[FLUSS6].rcDes.bottom 	= Bmp[FLUSS6].rcDes.top +Bmp[FLUSS6].Hoehe;

	Bmp[FLUSS7].Breite = 18;
	Bmp[FLUSS7].Hoehe  = 18;
	Bmp[FLUSS7].rcSrc.left		= 232;
	Bmp[FLUSS7].rcSrc.right		= Bmp[FLUSS7].rcSrc.left+Bmp[FLUSS7].Breite;
	Bmp[FLUSS7].rcSrc.top		= 0;
	Bmp[FLUSS7].rcSrc.bottom 	= Bmp[FLUSS7].rcSrc.top +Bmp[FLUSS7].Hoehe;
	Bmp[FLUSS7].rcDes.left		= 10;
	Bmp[FLUSS7].rcDes.right		= Bmp[FLUSS7].rcDes.left+Bmp[FLUSS7].Breite;
	Bmp[FLUSS7].rcDes.top		= 21;
	Bmp[FLUSS7].rcDes.bottom 	= Bmp[FLUSS7].rcDes.top +Bmp[FLUSS7].Hoehe;

	Bmp[FLUSS8].Breite = 18;
	Bmp[FLUSS8].Hoehe  = 18;
	Bmp[FLUSS8].rcSrc.left		= 250;
	Bmp[FLUSS8].rcSrc.right		= Bmp[FLUSS8].rcSrc.left+Bmp[FLUSS8].Breite;
	Bmp[FLUSS8].rcSrc.top		= 0;
	Bmp[FLUSS8].rcSrc.bottom 	= Bmp[FLUSS8].rcSrc.top +Bmp[FLUSS8].Hoehe;
	Bmp[FLUSS8].rcDes.left		= 26;
	Bmp[FLUSS8].rcDes.right		= Bmp[FLUSS8].rcDes.left+Bmp[FLUSS8].Breite;
	Bmp[FLUSS8].rcDes.top		= 21;
	Bmp[FLUSS8].rcDes.bottom 	= Bmp[FLUSS8].rcDes.top +Bmp[FLUSS8].Hoehe;

	Bmp[FLUSS9].Breite = 34;
	Bmp[FLUSS9].Hoehe  = 15;
	Bmp[FLUSS9].rcSrc.left		= 268;
	Bmp[FLUSS9].rcSrc.right		= Bmp[FLUSS9].rcSrc.left+Bmp[FLUSS9].Breite;
	Bmp[FLUSS9].rcSrc.top		= 0;
	Bmp[FLUSS9].rcSrc.bottom 	= Bmp[FLUSS9].rcSrc.top +Bmp[FLUSS9].Hoehe;
	Bmp[FLUSS9].rcDes.left		= 10;
	Bmp[FLUSS9].rcDes.right		= Bmp[FLUSS9].rcDes.left+Bmp[FLUSS9].Breite;
	Bmp[FLUSS9].rcDes.top		= 20;
	Bmp[FLUSS9].rcDes.bottom 	= Bmp[FLUSS9].rcDes.top +Bmp[FLUSS9].Hoehe;
	
	Bmp[FLUSS10].Breite = 34;
	Bmp[FLUSS10].Hoehe  = 13;
	Bmp[FLUSS10].rcSrc.left		= 302;
	Bmp[FLUSS10].rcSrc.right	= Bmp[FLUSS10].rcSrc.left+Bmp[FLUSS10].Breite;
	Bmp[FLUSS10].rcSrc.top		= 0;
	Bmp[FLUSS10].rcSrc.bottom 	= Bmp[FLUSS10].rcSrc.top +Bmp[FLUSS10].Hoehe;
	Bmp[FLUSS10].rcDes.left		= 10;
	Bmp[FLUSS10].rcDes.right	= Bmp[FLUSS10].rcDes.left+Bmp[FLUSS10].Breite;
	Bmp[FLUSS10].rcDes.top		= 26;
	Bmp[FLUSS10].rcDes.bottom 	= Bmp[FLUSS10].rcDes.top +Bmp[FLUSS10].Hoehe;

	Bmp[MUENDUNG1].Breite = 42;
	Bmp[MUENDUNG1].Hoehe  = 22;
	Bmp[MUENDUNG1].rcSrc.left		= 336;
	Bmp[MUENDUNG1].rcSrc.right		= Bmp[MUENDUNG1].rcSrc.left+Bmp[MUENDUNG1].Breite;
	Bmp[MUENDUNG1].rcSrc.top		= 0;
	Bmp[MUENDUNG1].rcSrc.bottom 	= Bmp[MUENDUNG1].rcSrc.top +Bmp[MUENDUNG1].Hoehe;
	Bmp[MUENDUNG1].rcDes.left		= 2;
	Bmp[MUENDUNG1].rcDes.right		= Bmp[MUENDUNG1].rcDes.left+Bmp[MUENDUNG1].Breite;
	Bmp[MUENDUNG1].rcDes.top		= 17;
	Bmp[MUENDUNG1].rcDes.bottom 	= Bmp[MUENDUNG1].rcDes.top +Bmp[MUENDUNG1].Hoehe;

	Bmp[MUENDUNG2].Breite = 40;
	Bmp[MUENDUNG2].Hoehe  = 22;
	Bmp[MUENDUNG2].rcSrc.left		= 378;
	Bmp[MUENDUNG2].rcSrc.right		= Bmp[MUENDUNG2].rcSrc.left+Bmp[MUENDUNG2].Breite;
	Bmp[MUENDUNG2].rcSrc.top		= 0;
	Bmp[MUENDUNG2].rcSrc.bottom 	= Bmp[MUENDUNG2].rcSrc.top +Bmp[MUENDUNG2].Hoehe;
	Bmp[MUENDUNG2].rcDes.left		= 10;
	Bmp[MUENDUNG2].rcDes.right		= Bmp[MUENDUNG2].rcDes.left+Bmp[MUENDUNG2].Breite;
	Bmp[MUENDUNG2].rcDes.top		= 17;
	Bmp[MUENDUNG2].rcDes.bottom 	= Bmp[MUENDUNG2].rcDes.top +Bmp[MUENDUNG2].Hoehe;

	Bmp[MUENDUNG3].Breite = 40;
	Bmp[MUENDUNG3].Hoehe  = 22;
	Bmp[MUENDUNG3].rcSrc.left		= 418;
	Bmp[MUENDUNG3].rcSrc.right		= Bmp[MUENDUNG3].rcSrc.left+Bmp[MUENDUNG3].Breite;
	Bmp[MUENDUNG3].rcSrc.top		= 0;
	Bmp[MUENDUNG3].rcSrc.bottom 	= Bmp[MUENDUNG3].rcSrc.top +Bmp[MUENDUNG3].Hoehe;
	Bmp[MUENDUNG3].rcDes.left		= 10;
	Bmp[MUENDUNG3].rcDes.right		= Bmp[MUENDUNG3].rcDes.left+Bmp[MUENDUNG3].Breite;
	Bmp[MUENDUNG3].rcDes.top		= 21;
	Bmp[MUENDUNG3].rcDes.bottom 	= Bmp[MUENDUNG3].rcDes.top +Bmp[MUENDUNG3].Hoehe;

	Bmp[MUENDUNG4].Breite = 42;
	Bmp[MUENDUNG4].Hoehe  = 22;
	Bmp[MUENDUNG4].rcSrc.left		= 458;
	Bmp[MUENDUNG4].rcSrc.right		= Bmp[MUENDUNG4].rcSrc.left+Bmp[MUENDUNG4].Breite;
	Bmp[MUENDUNG4].rcSrc.top		= 0;
	Bmp[MUENDUNG4].rcSrc.bottom 	= Bmp[MUENDUNG4].rcSrc.top +Bmp[MUENDUNG4].Hoehe;
	Bmp[MUENDUNG4].rcDes.left		= 2;
	Bmp[MUENDUNG4].rcDes.right		= Bmp[MUENDUNG4].rcDes.left+Bmp[MUENDUNG4].Breite;
	Bmp[MUENDUNG4].rcDes.top		= 21;
	Bmp[MUENDUNG4].rcDes.bottom 	= Bmp[MUENDUNG4].rcDes.top +Bmp[MUENDUNG4].Hoehe;
	
	Bmp[QUELLE1].Breite = 30;
	Bmp[QUELLE1].Hoehe  = 19;
	Bmp[QUELLE1].rcSrc.left		= 500;
	Bmp[QUELLE1].rcSrc.right	= Bmp[QUELLE1].rcSrc.left+Bmp[QUELLE1].Breite;
	Bmp[QUELLE1].rcSrc.top		= 0;
	Bmp[QUELLE1].rcSrc.bottom 	= Bmp[QUELLE1].rcSrc.top +Bmp[QUELLE1].Hoehe;
	Bmp[QUELLE1].rcDes.left		= 16;
	Bmp[QUELLE1].rcDes.right	= Bmp[QUELLE1].rcDes.left+Bmp[QUELLE1].Breite;
	Bmp[QUELLE1].rcDes.top		= 19;
	Bmp[QUELLE1].rcDes.bottom 	= Bmp[QUELLE1].rcDes.top +Bmp[QUELLE1].Hoehe;
	
	Bmp[QUELLE2].Breite = 26;
	Bmp[QUELLE2].Hoehe  = 19;
	Bmp[QUELLE2].rcSrc.left		= 530;
	Bmp[QUELLE2].rcSrc.right	= Bmp[QUELLE2].rcSrc.left+Bmp[QUELLE2].Breite;
	Bmp[QUELLE2].rcSrc.top		= 0;
	Bmp[QUELLE2].rcSrc.bottom 	= Bmp[QUELLE2].rcSrc.top +Bmp[QUELLE2].Hoehe;
	Bmp[QUELLE2].rcDes.left		= 9;
	Bmp[QUELLE2].rcDes.right	= Bmp[QUELLE2].rcDes.left+Bmp[QUELLE2].Breite;
	Bmp[QUELLE2].rcDes.top		= 20;
	Bmp[QUELLE2].rcDes.bottom 	= Bmp[QUELLE2].rcDes.top +Bmp[QUELLE2].Hoehe;	
	
	Bmp[QUELLE3].Breite = 25;
	Bmp[QUELLE3].Hoehe  = 16;
	Bmp[QUELLE3].rcSrc.left		= 556;
	Bmp[QUELLE3].rcSrc.right	= Bmp[QUELLE3].rcSrc.left+Bmp[QUELLE3].Breite;
	Bmp[QUELLE3].rcSrc.top		= 0;
	Bmp[QUELLE3].rcSrc.bottom 	= Bmp[QUELLE3].rcSrc.top +Bmp[QUELLE3].Hoehe;
	Bmp[QUELLE3].rcDes.left		= 19;
	Bmp[QUELLE3].rcDes.right	= Bmp[QUELLE3].rcDes.left+Bmp[QUELLE3].Breite;
	Bmp[QUELLE3].rcDes.top		= 19;
	Bmp[QUELLE3].rcDes.bottom 	= Bmp[QUELLE3].rcDes.top +Bmp[QUELLE3].Hoehe;			
	
	Bmp[QUELLE4].Breite = 25;
	Bmp[QUELLE4].Hoehe  = 15;
	Bmp[QUELLE4].rcSrc.left		= 581;
	Bmp[QUELLE4].rcSrc.right	= Bmp[QUELLE4].rcSrc.left+Bmp[QUELLE4].Breite;
	Bmp[QUELLE4].rcSrc.top		= 0;
	Bmp[QUELLE4].rcSrc.bottom 	= Bmp[QUELLE4].rcSrc.top +Bmp[QUELLE4].Hoehe;
	Bmp[QUELLE4].rcDes.left		= 8;
	Bmp[QUELLE4].rcDes.right	= Bmp[QUELLE4].rcDes.left+Bmp[QUELLE4].Breite;
	Bmp[QUELLE4].rcDes.top		= 21;
	Bmp[QUELLE4].rcDes.bottom 	= Bmp[QUELLE4].rcDes.top +Bmp[QUELLE4].Hoehe;			
	
	Bmp[SCHLEUSE1].Breite = 35;
	Bmp[SCHLEUSE1].Hoehe  = 22;
	Bmp[SCHLEUSE1].rcSrc.left		= 164;
	Bmp[SCHLEUSE1].rcSrc.right		= Bmp[SCHLEUSE1].rcSrc.left+Bmp[SCHLEUSE1].Breite;
	Bmp[SCHLEUSE1].rcSrc.top		= 126;
	Bmp[SCHLEUSE1].rcSrc.bottom 	= Bmp[SCHLEUSE1].rcSrc.top +Bmp[SCHLEUSE1].Hoehe;
	Bmp[SCHLEUSE1].rcDes.left		= 10;
	Bmp[SCHLEUSE1].rcDes.right		= Bmp[SCHLEUSE1].rcDes.left+Bmp[SCHLEUSE1].Breite;
	Bmp[SCHLEUSE1].rcDes.top		= 17;
	Bmp[SCHLEUSE1].rcDes.bottom 	= Bmp[SCHLEUSE1].rcDes.top +Bmp[SCHLEUSE1].Hoehe;			
	
	Bmp[SCHLEUSE2].Breite = 34;
	Bmp[SCHLEUSE2].Hoehe  = 23;
	Bmp[SCHLEUSE2].rcSrc.left		= 199;
	Bmp[SCHLEUSE2].rcSrc.right		= Bmp[SCHLEUSE2].rcSrc.left+Bmp[SCHLEUSE2].Breite;
	Bmp[SCHLEUSE2].rcSrc.top		= 126;
	Bmp[SCHLEUSE2].rcSrc.bottom 	= Bmp[SCHLEUSE2].rcSrc.top +Bmp[SCHLEUSE2].Hoehe;
	Bmp[SCHLEUSE2].rcDes.left		= 10;
	Bmp[SCHLEUSE2].rcDes.right		= Bmp[SCHLEUSE2].rcDes.left+Bmp[SCHLEUSE2].Breite;
	Bmp[SCHLEUSE2].rcDes.top		= 16;
	Bmp[SCHLEUSE2].rcDes.bottom 	= Bmp[SCHLEUSE2].rcDes.top +Bmp[SCHLEUSE2].Hoehe;
	
	Bmp[SCHLEUSE3].Breite = 34;
	Bmp[SCHLEUSE3].Hoehe  = 22;
	Bmp[SCHLEUSE3].rcSrc.left		= 233;
	Bmp[SCHLEUSE3].rcSrc.right		= Bmp[SCHLEUSE3].rcSrc.left+Bmp[SCHLEUSE3].Breite;
	Bmp[SCHLEUSE3].rcSrc.top		= 126;
	Bmp[SCHLEUSE3].rcSrc.bottom 	= Bmp[SCHLEUSE3].rcSrc.top +Bmp[SCHLEUSE3].Hoehe;
	Bmp[SCHLEUSE3].rcDes.left		= 10;
	Bmp[SCHLEUSE3].rcDes.right		= Bmp[SCHLEUSE3].rcDes.left+Bmp[SCHLEUSE3].Breite;
	Bmp[SCHLEUSE3].rcDes.top		= 17;
	Bmp[SCHLEUSE3].rcDes.bottom 	= Bmp[SCHLEUSE3].rcDes.top +Bmp[SCHLEUSE3].Hoehe;
	
	Bmp[SCHLEUSE4].Breite = 33;
	Bmp[SCHLEUSE4].Hoehe  = 23;
	Bmp[SCHLEUSE4].rcSrc.left		= 268;
	Bmp[SCHLEUSE4].rcSrc.right		= Bmp[SCHLEUSE4].rcSrc.left+Bmp[SCHLEUSE4].Breite;
	Bmp[SCHLEUSE4].rcSrc.top		= 105;
	Bmp[SCHLEUSE4].rcSrc.bottom 	= Bmp[SCHLEUSE4].rcSrc.top +Bmp[SCHLEUSE4].Hoehe;
	Bmp[SCHLEUSE4].rcDes.left		= 11;
	Bmp[SCHLEUSE4].rcDes.right		= Bmp[SCHLEUSE4].rcDes.left+Bmp[SCHLEUSE4].Breite;
	Bmp[SCHLEUSE4].rcDes.top		= 16;
	Bmp[SCHLEUSE4].rcDes.bottom 	= Bmp[SCHLEUSE4].rcDes.top +Bmp[SCHLEUSE4].Hoehe;	

	Bmp[SCHLEUSE5].Breite = 34;
	Bmp[SCHLEUSE5].Hoehe  = 17;
	Bmp[SCHLEUSE5].rcSrc.left		= 302;
	Bmp[SCHLEUSE5].rcSrc.right		= Bmp[SCHLEUSE5].rcSrc.left+Bmp[SCHLEUSE5].Breite;
	Bmp[SCHLEUSE5].rcSrc.top		= 91;
	Bmp[SCHLEUSE5].rcSrc.bottom 	= Bmp[SCHLEUSE5].rcSrc.top +Bmp[SCHLEUSE5].Hoehe;
	Bmp[SCHLEUSE5].rcDes.left		= 10;
	Bmp[SCHLEUSE5].rcDes.right		= Bmp[SCHLEUSE5].rcDes.left+Bmp[SCHLEUSE5].Breite;
	Bmp[SCHLEUSE5].rcDes.top		= 20;
	Bmp[SCHLEUSE5].rcDes.bottom 	= Bmp[SCHLEUSE5].rcDes.top +Bmp[SCHLEUSE5].Hoehe;	
	
	Bmp[SCHLEUSE6].Breite = 35;
	Bmp[SCHLEUSE6].Hoehe  = 23;
	Bmp[SCHLEUSE6].rcSrc.left		= 336;
	Bmp[SCHLEUSE6].rcSrc.right		= Bmp[SCHLEUSE6].rcSrc.left+Bmp[SCHLEUSE6].Breite;
	Bmp[SCHLEUSE6].rcSrc.top		= 154;
	Bmp[SCHLEUSE6].rcSrc.bottom 	= Bmp[SCHLEUSE6].rcSrc.top +Bmp[SCHLEUSE6].Hoehe;
	Bmp[SCHLEUSE6].rcDes.left		= 10;
	Bmp[SCHLEUSE6].rcDes.right		= Bmp[SCHLEUSE6].rcDes.left+Bmp[SCHLEUSE6].Breite;
	Bmp[SCHLEUSE6].rcDes.top		= 16;
	Bmp[SCHLEUSE6].rcDes.bottom 	= Bmp[SCHLEUSE6].rcDes.top +Bmp[SCHLEUSE6].Hoehe;	

	//Bauwerke
	for(let i=FELD; i<=FEUERSTELLE; i++) {
		Bmp[i].Animation = false;
		Bmp[i].Geschwindigkeit = 0;
		Bmp[i].Phase = 0;	
	}

	Bmp[FELD].Anzahl = 3;
	Bmp[FELD].Surface = lpDDSBau;
	Bmp[FELD].Breite = 42;
	Bmp[FELD].Hoehe  = 27;
	Bmp[FELD].rcSrc.left		= 0;
	Bmp[FELD].rcSrc.right		= 0+Bmp[FELD].Breite;
	Bmp[FELD].rcSrc.top		= 0;
	Bmp[FELD].rcSrc.bottom 	= 0+Bmp[FELD].Hoehe;
	Bmp[FELD].rcDes.left		= 5;
	Bmp[FELD].rcDes.right		= Bmp[FELD].rcDes.left+Bmp[FELD].Breite;
	Bmp[FELD].rcDes.top		= 15;
	Bmp[FELD].rcDes.bottom 	= Bmp[FELD].rcDes.top+Bmp[FELD].Hoehe;
	Bmp[FELD].AkAnzahl = 20;
		
	Bmp[ZELT].Anzahl = 1;
	Bmp[ZELT].Surface = lpDDSBau;
	Bmp[ZELT].Breite = 23;
	Bmp[ZELT].Hoehe  = 20;
	Bmp[ZELT].rcSrc.left		= 42;
	Bmp[ZELT].rcSrc.right		= 42+Bmp[ZELT].Breite;
	Bmp[ZELT].rcSrc.top		= 0;
	Bmp[ZELT].rcSrc.bottom 	= 0+Bmp[ZELT].Hoehe;
	Bmp[ZELT].rcDes.left		= 14;
	Bmp[ZELT].rcDes.right		= Bmp[ZELT].rcDes.left+Bmp[ZELT].Breite;
	Bmp[ZELT].rcDes.top		= 9;
	Bmp[ZELT].rcDes.bottom 	= Bmp[ZELT].rcDes.top+Bmp[ZELT].Hoehe;
	Bmp[ZELT].Rohstoff[ROHAST]   = 5;
	Bmp[ZELT].Rohstoff[ROHBLATT] = 5;
	Bmp[ZELT].AkAnzahl = 16;

	Bmp[BOOT].Anzahl = 2;
	Bmp[BOOT].Surface = lpDDSBau;
	Bmp[BOOT].Breite = 26;
	Bmp[BOOT].Hoehe  = 18;
	Bmp[BOOT].rcSrc.left		= 65;
	Bmp[BOOT].rcSrc.right		= 65+Bmp[BOOT].Breite;
	Bmp[BOOT].rcSrc.top		= 0;
	Bmp[BOOT].rcSrc.bottom 	= 0+Bmp[BOOT].Hoehe;
	Bmp[BOOT].rcDes.left		= 14;
	Bmp[BOOT].rcDes.right		= Bmp[BOOT].rcDes.left+Bmp[BOOT].Breite;
	Bmp[BOOT].rcDes.top		= 20;
	Bmp[BOOT].rcDes.bottom 	= Bmp[BOOT].rcDes.top+Bmp[BOOT].Hoehe;
	Bmp[BOOT].Rohstoff[ROHAST]   = 2;
	Bmp[BOOT].Rohstoff[ROHSTAMM] = 1;
	Bmp[BOOT].AkAnzahl = 16;	

	Bmp[ROHR].Anzahl = 2;
	Bmp[ROHR].Surface = lpDDSBau;
	Bmp[ROHR].Breite = 34;
	Bmp[ROHR].Hoehe  = 21;
	Bmp[ROHR].rcSrc.left		= 91;
	Bmp[ROHR].rcSrc.right		= 91+Bmp[ROHR].Breite;
	Bmp[ROHR].rcSrc.top		= 0;
	Bmp[ROHR].rcSrc.bottom 	= 0+Bmp[ROHR].Hoehe;
	Bmp[ROHR].rcDes.left		= 11;
	Bmp[ROHR].rcDes.right		= Bmp[ROHR].rcDes.left+Bmp[ROHR].Breite;
	Bmp[ROHR].rcDes.top		= 16;
	Bmp[ROHR].rcDes.bottom 	= Bmp[ROHR].rcDes.top+Bmp[ROHR].Hoehe;
	Bmp[ROHR].Rohstoff[ROHSTAMM] = 1;
	Bmp[ROHR].AkAnzahl = 18; 

	Bmp[SOS].Anzahl = 1;
	Bmp[SOS].Surface = lpDDSBau;
	Bmp[SOS].Breite = 36;
	Bmp[SOS].Hoehe  = 19;
	Bmp[SOS].rcSrc.left		= 125;
	Bmp[SOS].rcSrc.right	= 125+Bmp[SOS].Breite;
	Bmp[SOS].rcSrc.top		= 0;
	Bmp[SOS].rcSrc.bottom 	= 0+Bmp[SOS].Hoehe;
	Bmp[SOS].rcDes.left		= 11;
	Bmp[SOS].rcDes.right	= Bmp[SOS].rcDes.left+Bmp[SOS].Breite;
	Bmp[SOS].rcDes.top		= 20;
	Bmp[SOS].rcDes.bottom 	= Bmp[SOS].rcDes.top+Bmp[SOS].Hoehe;
	Bmp[SOS].Rohstoff[ROHSTEIN] = 10;
	Bmp[SOS].AkAnzahl = 20;

	Bmp[HAUS1].Anzahl = 1;
	Bmp[HAUS1].Surface = lpDDSBau;
	Bmp[HAUS1].Breite = 26;
	Bmp[HAUS1].Hoehe  = 41;
	Bmp[HAUS1].rcSrc.left		= 161;
	Bmp[HAUS1].rcSrc.right	= 161+Bmp[HAUS1].Breite;
	Bmp[HAUS1].rcSrc.top		= 0;
	Bmp[HAUS1].rcSrc.bottom 	= 0+Bmp[HAUS1].Hoehe;
	Bmp[HAUS1].rcDes.left		= 0;
	Bmp[HAUS1].rcDes.right	= Bmp[HAUS1].rcDes.left+Bmp[HAUS1].Breite;
	Bmp[HAUS1].rcDes.top		= 0;
	Bmp[HAUS1].rcDes.bottom 	= Bmp[HAUS1].rcDes.top+Bmp[HAUS1].Hoehe;
	Bmp[HAUS1].Rohstoff[ROHAST] = 4;
	Bmp[HAUS1].AkAnzahl = 19; 
	Bmp[HAUS1].Sound = WAVWALD;

	Bmp[HAUS2].Anzahl = 1;
	Bmp[HAUS2].Surface = lpDDSBau;
	Bmp[HAUS2].Breite = 34;
	Bmp[HAUS2].Hoehe  = 41;
	Bmp[HAUS2].rcSrc.left		= 187;
	Bmp[HAUS2].rcSrc.right	= 187+Bmp[HAUS2].Breite;
	Bmp[HAUS2].rcSrc.top		= 0;
	Bmp[HAUS2].rcSrc.bottom 	= 0+Bmp[HAUS2].Hoehe;
	Bmp[HAUS2].rcDes.left		= 0;
	Bmp[HAUS2].rcDes.right	= Bmp[HAUS2].rcDes.left+Bmp[HAUS2].Breite;
	Bmp[HAUS2].rcDes.top		= 0;
	Bmp[HAUS2].rcDes.bottom 	= Bmp[HAUS2].rcDes.top+Bmp[HAUS2].Hoehe;
	Bmp[HAUS2].Rohstoff[ROHAST] = 3;
	Bmp[HAUS2].Rohstoff[ROHSTAMM] = 3;
	Bmp[HAUS2].AkAnzahl = 21;
	Bmp[HAUS2].Sound = WAVWALD;

	Bmp[HAUS3].Anzahl = 1;
	Bmp[HAUS3].Surface = lpDDSBau;
	Bmp[HAUS3].Breite = 34;
	Bmp[HAUS3].Hoehe  = 41;
	Bmp[HAUS3].rcSrc.left		= 221;
	Bmp[HAUS3].rcSrc.right	= 221+Bmp[HAUS3].Breite;
	Bmp[HAUS3].rcSrc.top		= 0;
	Bmp[HAUS3].rcSrc.bottom 	= 0+Bmp[HAUS3].Hoehe;
	Bmp[HAUS3].rcDes.left		= 0;
	Bmp[HAUS3].rcDes.right	= Bmp[HAUS3].rcDes.left+Bmp[HAUS3].Breite;
	Bmp[HAUS3].rcDes.top		= 0;
	Bmp[HAUS3].rcDes.bottom 	= Bmp[HAUS3].rcDes.top+Bmp[HAUS3].Hoehe;
	Bmp[HAUS3].Rohstoff[ROHAST] = 4;
	Bmp[HAUS3].Rohstoff[ROHSTAMM] = 4;
	Bmp[HAUS3].Rohstoff[ROHBLATT] = 5;
	Bmp[HAUS3].AkAnzahl = 21;
	Bmp[HAUS3].Sound = WAVWALD;

	Bmp[FEUERSTELLE].Anzahl = 1;
	Bmp[FEUERSTELLE].Surface = lpDDSBau;
	Bmp[FEUERSTELLE].Breite = 21;
	Bmp[FEUERSTELLE].Hoehe  = 19;
	Bmp[FEUERSTELLE].rcSrc.left		= 255;
	Bmp[FEUERSTELLE].rcSrc.right	= 255+Bmp[FEUERSTELLE].Breite;
	Bmp[FEUERSTELLE].rcSrc.top		= 0;
	Bmp[FEUERSTELLE].rcSrc.bottom 	= 0+Bmp[FEUERSTELLE].Hoehe;
	Bmp[FEUERSTELLE].rcDes.left		= 15;
	Bmp[FEUERSTELLE].rcDes.right	= Bmp[FEUERSTELLE].rcDes.left+Bmp[FEUERSTELLE].Breite;
	Bmp[FEUERSTELLE].rcDes.top		= 10;
	Bmp[FEUERSTELLE].rcDes.bottom 	= Bmp[FEUERSTELLE].rcDes.top+Bmp[FEUERSTELLE].Hoehe;
	Bmp[FEUERSTELLE].Rohstoff[ROHAST] = 5;
	Bmp[FEUERSTELLE].Rohstoff[ROHSTAMM] = 4;
	Bmp[FEUERSTELLE].AkAnzahl = 9; 

	//Allgemein Bäume
	for(let i=BAUM1; i<=BAUM4; i++) {
		Bmp[i].Animation = true;
		Bmp[i].Anzahl = 4;
		Bmp[i].Geschwindigkeit = 4;
		Bmp[i].Phase = 0;
		Bmp[i].Surface = lpDDSBaum;
		Bmp[i].Sound = WAVWALD;
	}
	//Baum1
	Bmp[BAUM1].rcSrc.left = 0;
	Bmp[BAUM1].rcSrc.top = 0;
	Bmp[BAUM1].rcSrc.right = 21;
	Bmp[BAUM1].rcSrc.bottom = 26;
	Bmp[BAUM1].Breite = (Bmp[BAUM1].rcSrc.right - Bmp[BAUM1].rcSrc.left);
	Bmp[BAUM1].Hoehe = (Bmp[BAUM1].rcSrc.bottom - Bmp[BAUM1].rcSrc.top);

	//Baum2
	Bmp[BAUM2].rcSrc.left = 21;
	Bmp[BAUM2].rcSrc.top = 0;
	Bmp[BAUM2].rcSrc.right = 42;
	Bmp[BAUM2].rcSrc.bottom = 26;
	Bmp[BAUM2].Breite = (Bmp[BAUM2].rcSrc.right - Bmp[BAUM2].rcSrc.left);
	Bmp[BAUM2].Hoehe = (Bmp[BAUM2].rcSrc.bottom - Bmp[BAUM2].rcSrc.top);
	
	//Baum3
	Bmp[BAUM3].rcSrc.left = 42;
	Bmp[BAUM3].rcSrc.top = 0;
	Bmp[BAUM3].rcSrc.right = 64;
	Bmp[BAUM3].rcSrc.bottom = 27;
	Bmp[BAUM3].Breite = (Bmp[BAUM3].rcSrc.right - Bmp[BAUM3].rcSrc.left);
	Bmp[BAUM3].Hoehe = (Bmp[BAUM3].rcSrc.bottom - Bmp[BAUM3].rcSrc.top);

	//Baum4
	Bmp[BAUM4].rcSrc.left = 64;
	Bmp[BAUM4].rcSrc.top = 0;
	Bmp[BAUM4].rcSrc.right = 81;
	Bmp[BAUM4].rcSrc.bottom = 16;
	Bmp[BAUM4].Breite = (Bmp[BAUM4].rcSrc.right - Bmp[BAUM4].rcSrc.left);
	Bmp[BAUM4].Hoehe = (Bmp[BAUM4].rcSrc.bottom - Bmp[BAUM4].rcSrc.top);

	//Baumgro�
	Bmp[BAUMGROSS].rcSrc.left = 238;
	Bmp[BAUMGROSS].rcSrc.top = 0;
	Bmp[BAUMGROSS].rcSrc.right = 238+26;
	Bmp[BAUMGROSS].rcSrc.bottom = 41;
	Bmp[BAUMGROSS].Breite = (Bmp[BAUMGROSS].rcSrc.right - Bmp[BAUMGROSS].rcSrc.left);
	Bmp[BAUMGROSS].Hoehe = (Bmp[BAUMGROSS].rcSrc.bottom - Bmp[BAUMGROSS].rcSrc.top);
	Bmp[BAUMGROSS].Animation = false;
	Bmp[BAUMGROSS].Anzahl = 1;
	Bmp[BAUMGROSS].Geschwindigkeit = 0;
	Bmp[BAUMGROSS].Phase = 0;
	Bmp[BAUMGROSS].Surface = lpDDSBaum;
	Bmp[BAUMGROSS].Sound = WAVWALD;
	
	//Feuer
	Bmp[FEUER].Anzahl = 3;
	Bmp[FEUER].Surface = lpDDSBau;
	Bmp[FEUER].Breite = 21;
	Bmp[FEUER].Hoehe  = 28;
	Bmp[FEUER].rcSrc.left		= 276;
	Bmp[FEUER].rcSrc.right	= 276+Bmp[FEUER].Breite;
	Bmp[FEUER].rcSrc.top		= 0;
	Bmp[FEUER].rcSrc.bottom 	= 0+Bmp[FEUER].Hoehe;
	Bmp[FEUER].rcDes.left		= 15;
	Bmp[FEUER].rcDes.right	= Bmp[FEUER].rcDes.left+Bmp[FEUER].Breite;
	Bmp[FEUER].rcDes.top		= 1;
	Bmp[FEUER].rcDes.bottom 	= Bmp[FEUER].rcDes.top+Bmp[FEUER].Hoehe;
	Bmp[FEUER].Animation = true;
	Bmp[FEUER].Geschwindigkeit = 6;
	Bmp[FEUER].Phase = 0;
	Bmp[FEUER].Sound = WAVFEUER;

	//WRACK
	Bmp[WRACK].Anzahl = 3;
	Bmp[WRACK].Surface = lpDDSBau;
	Bmp[WRACK].Breite = 24;
	Bmp[WRACK].Hoehe  = 18;
	Bmp[WRACK].rcSrc.left		= 391;
	Bmp[WRACK].rcSrc.right	= 391+Bmp[WRACK].Breite;
	Bmp[WRACK].rcSrc.top		= 0;
	Bmp[WRACK].rcSrc.bottom 	= 0+Bmp[WRACK].Hoehe;
	Bmp[WRACK].rcDes.left		= 15;
	Bmp[WRACK].rcDes.right	= Bmp[WRACK].rcDes.left+Bmp[WRACK].Breite;
	Bmp[WRACK].rcDes.top		= 20;
	Bmp[WRACK].rcDes.bottom 	= Bmp[WRACK].rcDes.top+Bmp[WRACK].Hoehe;
	Bmp[WRACK].Animation = true;
	Bmp[WRACK].Geschwindigkeit = 5;
	Bmp[WRACK].Phase = 0;	

	//WRACK2
	Bmp[WRACK2].Anzahl = 3;
	Bmp[WRACK2].Surface = lpDDSBau;
	Bmp[WRACK2].Breite = 27;
	Bmp[WRACK2].Hoehe  = 26;
	Bmp[WRACK2].rcSrc.left		= 415;
	Bmp[WRACK2].rcSrc.right	= 415+Bmp[WRACK2].Breite;
	Bmp[WRACK2].rcSrc.top		= 0;
	Bmp[WRACK2].rcSrc.bottom 	= 0+Bmp[WRACK2].Hoehe;
	Bmp[WRACK2].rcDes.left		= 15;
	Bmp[WRACK2].rcDes.right	= Bmp[WRACK2].rcDes.left+Bmp[WRACK2].Breite;
	Bmp[WRACK2].rcDes.top		= 16;
	Bmp[WRACK2].rcDes.bottom 	= Bmp[WRACK2].rcDes.top+Bmp[WRACK2].Hoehe;
	Bmp[WRACK2].Animation = true;
	Bmp[WRACK2].Geschwindigkeit = 5;
	Bmp[WRACK2].Phase = 0;	

	//Fr�chte
	//Busch
	Bmp[BUSCH].rcSrc.left = 81;
	Bmp[BUSCH].rcSrc.top = 0;
	Bmp[BUSCH].rcSrc.right = 81+20;
	Bmp[BUSCH].rcSrc.bottom = 13;
	Bmp[BUSCH].Breite = (Bmp[BUSCH].rcSrc.right - Bmp[BUSCH].rcSrc.left);
	Bmp[BUSCH].Hoehe = (Bmp[BUSCH].rcSrc.bottom - Bmp[BUSCH].rcSrc.top);
	Bmp[BUSCH].Animation = false;
	Bmp[BUSCH].Anzahl = 3;
	Bmp[BUSCH].Geschwindigkeit = 0;
	Bmp[BUSCH].Phase = 0;
	Bmp[BUSCH].Surface = lpDDSBaum;

	//Buttons
	
	//StandardBmponsinitialisierung
	for (let i=BUTTGITTER; i<=BUTTDESTROY; i++) {
		Bmp[i].Animation = false;
		Bmp[i].Surface = lpDDSButtons;
		Bmp[i].Anzahl = 1;
		Bmp[i].Phase  = 0;
	}

	//ButtGitter
    Bmp[BUTTGITTER].rcSrc.left = 0;
	Bmp[BUTTGITTER].rcSrc.top  = 0;
	Bmp[BUTTGITTER].rcSrc.right= 28;
	Bmp[BUTTGITTER].rcSrc.bottom=28;
	Bmp[BUTTGITTER].rcDes.left = rcPanel.left+173;
	Bmp[BUTTGITTER].rcDes.top  = rcPanel.top+26;
	Bmp[BUTTGITTER].rcDes.right= Bmp[BUTTGITTER].rcDes.left+28;
	Bmp[BUTTGITTER].rcDes.bottom=Bmp[BUTTGITTER].rcDes.top+28;
	Bmp[BUTTGITTER].Breite = (Bmp[BUTTGITTER].rcSrc.right - Bmp[BUTTGITTER].rcSrc.left);
	Bmp[BUTTGITTER].Hoehe = (Bmp[BUTTGITTER].rcSrc.bottom - Bmp[BUTTGITTER].rcSrc.top);
	Bmp[BUTTGITTER].Anzahl = 2;

	//BUTTANIMATION
    Bmp[BUTTANIMATION].rcSrc.left = 0;
	Bmp[BUTTANIMATION].rcSrc.top  = 56;
	Bmp[BUTTANIMATION].rcSrc.right= 28;
	Bmp[BUTTANIMATION].rcSrc.bottom=56+28;
	Bmp[BUTTANIMATION].rcDes.left = rcPanel.left+173;
	Bmp[BUTTANIMATION].rcDes.top  = rcPanel.top+60;
	Bmp[BUTTANIMATION].rcDes.right= Bmp[BUTTANIMATION].rcDes.left+28;
	Bmp[BUTTANIMATION].rcDes.bottom=Bmp[BUTTANIMATION].rcDes.top+28;
	Bmp[BUTTANIMATION].Breite = (Bmp[BUTTANIMATION].rcSrc.right - Bmp[BUTTANIMATION].rcSrc.left);
	Bmp[BUTTANIMATION].Hoehe = (Bmp[BUTTANIMATION].rcSrc.bottom - Bmp[BUTTANIMATION].rcSrc.top);
	Bmp[BUTTANIMATION].Anzahl = 2;

	//BUTTBEENDEN
    Bmp[BUTTBEENDEN].rcSrc.left = 0;
	Bmp[BUTTBEENDEN].rcSrc.top  = 112;
	Bmp[BUTTBEENDEN].rcSrc.right= 20;
	Bmp[BUTTBEENDEN].rcSrc.bottom=112+20;
	Bmp[BUTTBEENDEN].rcDes.left = rcPanel.left+60;
	Bmp[BUTTBEENDEN].rcDes.top  = rcPanel.top+2;
	Bmp[BUTTBEENDEN].rcDes.right= Bmp[BUTTBEENDEN].rcDes.left+20;
	Bmp[BUTTBEENDEN].rcDes.bottom=Bmp[BUTTBEENDEN].rcDes.top+20;
	Bmp[BUTTBEENDEN].Breite = (Bmp[BUTTBEENDEN].rcSrc.right - Bmp[BUTTBEENDEN].rcSrc.left);
	Bmp[BUTTBEENDEN].Hoehe = (Bmp[BUTTBEENDEN].rcSrc.bottom - Bmp[BUTTBEENDEN].rcSrc.top);
	Bmp[BUTTBEENDEN].Anzahl = 4;
	Bmp[BUTTBEENDEN].Geschwindigkeit = 4;

	//BUTTNEU
    Bmp[BUTTNEU].rcSrc.left = 0;
	Bmp[BUTTNEU].rcSrc.top  = 192;
	Bmp[BUTTNEU].rcSrc.right= 20;
	Bmp[BUTTNEU].rcSrc.bottom=192+20;
	Bmp[BUTTNEU].rcDes.left = rcPanel.left+100;
	Bmp[BUTTNEU].rcDes.top  = rcPanel.top+2;
	Bmp[BUTTNEU].rcDes.right= Bmp[BUTTNEU].rcDes.left+20;
	Bmp[BUTTNEU].rcDes.bottom=Bmp[BUTTNEU].rcDes.top+20;
	Bmp[BUTTNEU].Breite = (Bmp[BUTTNEU].rcSrc.right - Bmp[BUTTNEU].rcSrc.left);
	Bmp[BUTTNEU].Hoehe = (Bmp[BUTTNEU].rcSrc.bottom - Bmp[BUTTNEU].rcSrc.top);
	Bmp[BUTTNEU].Anzahl = 2;
	Bmp[BUTTNEU].Geschwindigkeit = 3;

	
	//BUTTTAGNEU
    Bmp[BUTTTAGNEU].rcSrc.left = 0;
	Bmp[BUTTTAGNEU].rcSrc.top  = 232;
	Bmp[BUTTTAGNEU].rcSrc.right= 20;
	Bmp[BUTTTAGNEU].rcSrc.bottom=232+20;
	Bmp[BUTTTAGNEU].rcDes.left = rcPanel.left+140;
	Bmp[BUTTTAGNEU].rcDes.top  = rcPanel.top+2;
	Bmp[BUTTTAGNEU].rcDes.right= Bmp[BUTTTAGNEU].rcDes.left+20;
	Bmp[BUTTTAGNEU].rcDes.bottom=Bmp[BUTTTAGNEU].rcDes.top+20;
	Bmp[BUTTTAGNEU].Breite = (Bmp[BUTTTAGNEU].rcSrc.right - Bmp[BUTTTAGNEU].rcSrc.left);
	Bmp[BUTTTAGNEU].Hoehe = (Bmp[BUTTTAGNEU].rcSrc.bottom - Bmp[BUTTTAGNEU].rcSrc.top);
	Bmp[BUTTTAGNEU].Anzahl = 2;
	Bmp[BUTTTAGNEU].Geschwindigkeit = 2;

	//BUTTSOUND
    Bmp[BUTTSOUND].rcSrc.left = 0;
	Bmp[BUTTSOUND].rcSrc.top  = 272;
	Bmp[BUTTSOUND].rcSrc.right= 28;
	Bmp[BUTTSOUND].rcSrc.bottom=272+28;
	Bmp[BUTTSOUND].rcDes.left = rcPanel.left+173;
	Bmp[BUTTSOUND].rcDes.top  = rcPanel.top+94;
	Bmp[BUTTSOUND].rcDes.right= Bmp[BUTTSOUND].rcDes.left+28;
	Bmp[BUTTSOUND].rcDes.bottom=Bmp[BUTTSOUND].rcDes.top+28;
	Bmp[BUTTSOUND].Breite = (Bmp[BUTTSOUND].rcSrc.right - Bmp[BUTTSOUND].rcSrc.left);
	Bmp[BUTTSOUND].Hoehe = (Bmp[BUTTSOUND].rcSrc.bottom - Bmp[BUTTSOUND].rcSrc.top);
	Bmp[BUTTSOUND].Anzahl = 2;

	//ButtAktion
	Bmp[BUTTAKTION].rcSrc.left = 28;
	Bmp[BUTTAKTION].rcSrc.top  = 0;
	Bmp[BUTTAKTION].rcSrc.right= 28+35;
	Bmp[BUTTAKTION].rcSrc.bottom=35; 
	Bmp[BUTTAKTION].rcDes.left = rcPanel.left+29;
	Bmp[BUTTAKTION].rcDes.top  = rcPanel.top+157;
	Bmp[BUTTAKTION].rcDes.right= Bmp[BUTTAKTION].rcDes.left+35;
	Bmp[BUTTAKTION].rcDes.bottom=Bmp[BUTTAKTION].rcDes.top+35;
	Bmp[BUTTAKTION].Breite = (Bmp[BUTTAKTION].rcSrc.right - Bmp[BUTTAKTION].rcSrc.left);
	Bmp[BUTTAKTION].Hoehe = (Bmp[BUTTAKTION].rcSrc.bottom - Bmp[BUTTAKTION].rcSrc.top);
	Bmp[BUTTAKTION].Anzahl = 3;
	Bmp[BUTTAKTION].Geschwindigkeit = 6;

	//BUTTBAUEN
	Bmp[BUTTBAUEN].rcSrc.left = 203;
	Bmp[BUTTBAUEN].rcSrc.top  = 0;
	Bmp[BUTTBAUEN].rcSrc.right= 203+35;
	Bmp[BUTTBAUEN].rcSrc.bottom=35; 
	Bmp[BUTTBAUEN].rcDes.left = rcPanel.left+70;
	Bmp[BUTTBAUEN].rcDes.top  = rcPanel.top+157;
	Bmp[BUTTBAUEN].rcDes.right= Bmp[BUTTBAUEN].rcDes.left+35;
	Bmp[BUTTBAUEN].rcDes.bottom=Bmp[BUTTBAUEN].rcDes.top+35;
	Bmp[BUTTBAUEN].Breite = (Bmp[BUTTBAUEN].rcSrc.right - Bmp[BUTTBAUEN].rcSrc.left);
	Bmp[BUTTBAUEN].Hoehe = (Bmp[BUTTBAUEN].rcSrc.bottom - Bmp[BUTTBAUEN].rcSrc.top);
	Bmp[BUTTBAUEN].Anzahl = 4;
	Bmp[BUTTBAUEN].Geschwindigkeit = 5;


	//BUTTINVENTAR
	Bmp[BUTTINVENTAR].rcSrc.left = 168;
	Bmp[BUTTINVENTAR].rcSrc.top  = 0;
	Bmp[BUTTINVENTAR].rcSrc.right= 168+35;
	Bmp[BUTTINVENTAR].rcSrc.bottom=35; 
	Bmp[BUTTINVENTAR].rcDes.left = rcPanel.left+152;
	Bmp[BUTTINVENTAR].rcDes.top  = rcPanel.top+157;
	Bmp[BUTTINVENTAR].rcDes.right= Bmp[BUTTINVENTAR].rcDes.left+35;
	Bmp[BUTTINVENTAR].rcDes.bottom=Bmp[BUTTINVENTAR].rcDes.top+35;
	Bmp[BUTTINVENTAR].Breite = (Bmp[BUTTINVENTAR].rcSrc.right - Bmp[BUTTINVENTAR].rcSrc.left);
	Bmp[BUTTINVENTAR].Hoehe = (Bmp[BUTTINVENTAR].rcSrc.bottom - Bmp[BUTTINVENTAR].rcSrc.top);
	Bmp[BUTTINVENTAR].Anzahl = 4;
	Bmp[BUTTINVENTAR].Geschwindigkeit = 4;

	//BUTTWEITER
	Bmp[BUTTWEITER].rcSrc.left = 343;
	Bmp[BUTTWEITER].rcSrc.top  = 0;
	Bmp[BUTTWEITER].rcSrc.right= 343+35;
	Bmp[BUTTWEITER].rcSrc.bottom=35; 
	Bmp[BUTTWEITER].rcDes.left = rcPanel.left+111;
	Bmp[BUTTWEITER].rcDes.top  = rcPanel.top+157;
	Bmp[BUTTWEITER].rcDes.right= Bmp[BUTTWEITER].rcDes.left+35;
	Bmp[BUTTWEITER].rcDes.bottom=Bmp[BUTTWEITER].rcDes.top+35;
	Bmp[BUTTWEITER].Breite = (Bmp[BUTTWEITER].rcSrc.right - Bmp[BUTTWEITER].rcSrc.left);
	Bmp[BUTTWEITER].Hoehe = (Bmp[BUTTWEITER].rcSrc.bottom - Bmp[BUTTWEITER].rcSrc.top);
	Bmp[BUTTWEITER].Anzahl = 4;
	Bmp[BUTTWEITER].Geschwindigkeit = 4;
	Bmp[BUTTWEITER].Phase = -1;

	//BUTTSTOP
	Bmp[BUTTSTOP].rcSrc.left = 378;
	Bmp[BUTTSTOP].rcSrc.top  = 0;
	Bmp[BUTTSTOP].rcSrc.right= 378+35;
	Bmp[BUTTSTOP].rcSrc.bottom=35; 
	Bmp[BUTTSTOP].rcDes.left = rcPanel.left+111;
	Bmp[BUTTSTOP].rcDes.top  = rcPanel.top+157;
	Bmp[BUTTSTOP].rcDes.right= Bmp[BUTTSTOP].rcDes.left+35;
	Bmp[BUTTSTOP].rcDes.bottom=Bmp[BUTTSTOP].rcDes.top+35;
	Bmp[BUTTSTOP].Breite = (Bmp[BUTTSTOP].rcSrc.right - Bmp[BUTTSTOP].rcSrc.left);
	Bmp[BUTTSTOP].Hoehe = (Bmp[BUTTSTOP].rcSrc.bottom - Bmp[BUTTSTOP].rcSrc.top);
	Bmp[BUTTSTOP].Anzahl = 4;
	Bmp[BUTTSTOP].Geschwindigkeit = 4;
	Bmp[BUTTSTOP].Phase = -1;

	//BUTTABLEGEN
	Bmp[BUTTABLEGEN].rcSrc.left = 483;
	Bmp[BUTTABLEGEN].rcSrc.top  = 0;
	Bmp[BUTTABLEGEN].rcSrc.right= 483+35;
	Bmp[BUTTABLEGEN].rcSrc.bottom=35; 
	Bmp[BUTTABLEGEN].rcDes.left = rcPanel.left+111;
	Bmp[BUTTABLEGEN].rcDes.top  = rcPanel.top+157;
	Bmp[BUTTABLEGEN].rcDes.right= Bmp[BUTTABLEGEN].rcDes.left+35;
	Bmp[BUTTABLEGEN].rcDes.bottom=Bmp[BUTTABLEGEN].rcDes.top+35;
	Bmp[BUTTABLEGEN].Breite = (Bmp[BUTTABLEGEN].rcSrc.right - Bmp[BUTTABLEGEN].rcSrc.left);
	Bmp[BUTTABLEGEN].Hoehe = (Bmp[BUTTABLEGEN].rcSrc.bottom - Bmp[BUTTABLEGEN].rcSrc.top);
	Bmp[BUTTABLEGEN].Anzahl = 4;
	Bmp[BUTTABLEGEN].Geschwindigkeit = 3;
	Bmp[BUTTSTOP].Phase = -1;

	//BUTTSUCHEN
	Bmp[BUTTSUCHEN].rcSrc.left = 63;
	Bmp[BUTTSUCHEN].rcSrc.top  = 0;
	Bmp[BUTTSUCHEN].rcSrc.right= 63+35;
	Bmp[BUTTSUCHEN].rcSrc.bottom=35; 
	Bmp[BUTTSUCHEN].rcDes.left = rcPanel.left+29;
	Bmp[BUTTSUCHEN].rcDes.top  = rcPanel.top+220;
	Bmp[BUTTSUCHEN].rcDes.right= Bmp[BUTTSUCHEN].rcDes.left+35;
	Bmp[BUTTSUCHEN].rcDes.bottom=Bmp[BUTTSUCHEN].rcDes.top+35;
	Bmp[BUTTSUCHEN].Breite = (Bmp[BUTTSUCHEN].rcSrc.right - Bmp[BUTTSUCHEN].rcSrc.left);
	Bmp[BUTTSUCHEN].Hoehe = (Bmp[BUTTSUCHEN].rcSrc.bottom - Bmp[BUTTSUCHEN].rcSrc.top);
	Bmp[BUTTSUCHEN].Anzahl = 4;
	Bmp[BUTTSUCHEN].Geschwindigkeit = 4;

	//BUTTESSEN
	Bmp[BUTTESSEN].rcSrc.left = 133;
	Bmp[BUTTESSEN].rcSrc.top  = 0;
	Bmp[BUTTESSEN].rcSrc.right= 133+35;
	Bmp[BUTTESSEN].rcSrc.bottom=35; 
	Bmp[BUTTESSEN].rcDes.left = rcPanel.left+70;
	Bmp[BUTTESSEN].rcDes.top  = rcPanel.top+220;
	Bmp[BUTTESSEN].rcDes.right= Bmp[BUTTESSEN].rcDes.left+35;
	Bmp[BUTTESSEN].rcDes.bottom=Bmp[BUTTESSEN].rcDes.top+35;
	Bmp[BUTTESSEN].Breite = (Bmp[BUTTESSEN].rcSrc.right - Bmp[BUTTESSEN].rcSrc.left);
	Bmp[BUTTESSEN].Hoehe = (Bmp[BUTTESSEN].rcSrc.bottom - Bmp[BUTTESSEN].rcSrc.top);
	Bmp[BUTTESSEN].Anzahl = 4;
	Bmp[BUTTESSEN].Geschwindigkeit = 4;

	//BUTTSCHLAFEN
	Bmp[BUTTSCHLAFEN].rcSrc.left = 308;
	Bmp[BUTTSCHLAFEN].rcSrc.top  = 0;
	Bmp[BUTTSCHLAFEN].rcSrc.right= 308+35;
	Bmp[BUTTSCHLAFEN].rcSrc.bottom=35; 
	Bmp[BUTTSCHLAFEN].rcDes.left = rcPanel.left+111;
	Bmp[BUTTSCHLAFEN].rcDes.top  = rcPanel.top+220;
	Bmp[BUTTSCHLAFEN].rcDes.right= Bmp[BUTTSCHLAFEN].rcDes.left+35;
	Bmp[BUTTSCHLAFEN].rcDes.bottom=Bmp[BUTTSCHLAFEN].rcDes.top+35;
	Bmp[BUTTSCHLAFEN].Breite = (Bmp[BUTTSCHLAFEN].rcSrc.right - Bmp[BUTTSCHLAFEN].rcSrc.left);
	Bmp[BUTTSCHLAFEN].Hoehe = (Bmp[BUTTSCHLAFEN].rcSrc.bottom - Bmp[BUTTSCHLAFEN].rcSrc.top);
	Bmp[BUTTSCHLAFEN].Anzahl = 4;
	Bmp[BUTTSCHLAFEN].Geschwindigkeit = 3;

	//BUTTFAELLEN
	Bmp[BUTTFAELLEN].rcSrc.left = 98;
	Bmp[BUTTFAELLEN].rcSrc.top  = 0;
	Bmp[BUTTFAELLEN].rcSrc.right= 98+35;
	Bmp[BUTTFAELLEN].rcSrc.bottom=35; 
	Bmp[BUTTFAELLEN].rcDes.left = rcPanel.left+152;
	Bmp[BUTTFAELLEN].rcDes.top  = rcPanel.top+220;
	Bmp[BUTTFAELLEN].rcDes.right= Bmp[BUTTFAELLEN].rcDes.left+35;
	Bmp[BUTTFAELLEN].rcDes.bottom=Bmp[BUTTFAELLEN].rcDes.top+35;
	Bmp[BUTTFAELLEN].Breite = (Bmp[BUTTFAELLEN].rcSrc.right - Bmp[BUTTFAELLEN].rcSrc.left);
	Bmp[BUTTFAELLEN].Hoehe = (Bmp[BUTTFAELLEN].rcSrc.bottom - Bmp[BUTTFAELLEN].rcSrc.top);
	Bmp[BUTTFAELLEN].Anzahl = 4;
	Bmp[BUTTFAELLEN].Geschwindigkeit = 4;
	Bmp[BUTTFAELLEN].Phase  = -1;

	//BUTTANGELN
	Bmp[BUTTANGELN].rcSrc.left = 413;
	Bmp[BUTTANGELN].rcSrc.top  = 0;
	Bmp[BUTTANGELN].rcSrc.right= 413+35;
	Bmp[BUTTANGELN].rcSrc.bottom=35; 
	Bmp[BUTTANGELN].rcDes.left = rcPanel.left+29;
	Bmp[BUTTANGELN].rcDes.top  = rcPanel.top+268;
	Bmp[BUTTANGELN].rcDes.right= Bmp[BUTTANGELN].rcDes.left+35;
	Bmp[BUTTANGELN].rcDes.bottom=Bmp[BUTTANGELN].rcDes.top+35;
	Bmp[BUTTANGELN].Breite = (Bmp[BUTTANGELN].rcSrc.right - Bmp[BUTTANGELN].rcSrc.left);
	Bmp[BUTTANGELN].Hoehe = (Bmp[BUTTANGELN].rcSrc.bottom - Bmp[BUTTANGELN].rcSrc.top);
	Bmp[BUTTANGELN].Anzahl = 4;
	Bmp[BUTTANGELN].Geschwindigkeit = 3;
	Bmp[BUTTANGELN].Phase  = -1;

	//BUTTANZUENDEN
	Bmp[BUTTANZUENDEN].rcSrc.left = 28;
	Bmp[BUTTANZUENDEN].rcSrc.top  = 175;
	Bmp[BUTTANZUENDEN].rcSrc.right= 28+35;
	Bmp[BUTTANZUENDEN].rcSrc.bottom=175+35; 
	Bmp[BUTTANZUENDEN].rcDes.left = rcPanel.left+70;
	Bmp[BUTTANZUENDEN].rcDes.top  = rcPanel.top+268;
	Bmp[BUTTANZUENDEN].rcDes.right= Bmp[BUTTANZUENDEN].rcDes.left+35;
	Bmp[BUTTANZUENDEN].rcDes.bottom=Bmp[BUTTANZUENDEN].rcDes.top+35;
	Bmp[BUTTANZUENDEN].Breite = (Bmp[BUTTANZUENDEN].rcSrc.right - Bmp[BUTTANZUENDEN].rcSrc.left);
	Bmp[BUTTANZUENDEN].Hoehe = (Bmp[BUTTANZUENDEN].rcSrc.bottom - Bmp[BUTTANZUENDEN].rcSrc.top);
	Bmp[BUTTANZUENDEN].Anzahl = 3;
	Bmp[BUTTANZUENDEN].Geschwindigkeit = 4;
	Bmp[BUTTANZUENDEN].Phase  = -1;

	//BUTTAUSSCHAU
	Bmp[BUTTAUSSCHAU].rcSrc.left = 63;
	Bmp[BUTTAUSSCHAU].rcSrc.top  = 175;
	Bmp[BUTTAUSSCHAU].rcSrc.right= 63+35;
	Bmp[BUTTAUSSCHAU].rcSrc.bottom=175+35; 
	Bmp[BUTTAUSSCHAU].rcDes.left = rcPanel.left+111;
	Bmp[BUTTAUSSCHAU].rcDes.top  = rcPanel.top+268;
	Bmp[BUTTAUSSCHAU].rcDes.right= Bmp[BUTTAUSSCHAU].rcDes.left+35;
	Bmp[BUTTAUSSCHAU].rcDes.bottom=Bmp[BUTTAUSSCHAU].rcDes.top+35;
	Bmp[BUTTAUSSCHAU].Breite = (Bmp[BUTTAUSSCHAU].rcSrc.right - Bmp[BUTTAUSSCHAU].rcSrc.left);
	Bmp[BUTTAUSSCHAU].Hoehe = (Bmp[BUTTAUSSCHAU].rcSrc.bottom - Bmp[BUTTAUSSCHAU].rcSrc.top);
	Bmp[BUTTAUSSCHAU].Anzahl = 4;
	Bmp[BUTTAUSSCHAU].Geschwindigkeit = 3;
	Bmp[BUTTAUSSCHAU].Phase = -1;

	//BUTTSCHATZKARTE
	Bmp[BUTTSCHATZKARTE].rcSrc.left = 98;
	Bmp[BUTTSCHATZKARTE].rcSrc.top  = 175;
	Bmp[BUTTSCHATZKARTE].rcSrc.right= 98+35;
	Bmp[BUTTSCHATZKARTE].rcSrc.bottom=175+35; 
	Bmp[BUTTSCHATZKARTE].rcDes.left = rcPanel.left+152;
	Bmp[BUTTSCHATZKARTE].rcDes.top  = rcPanel.top+268;
	Bmp[BUTTSCHATZKARTE].rcDes.right= Bmp[BUTTSCHATZKARTE].rcDes.left+35;
	Bmp[BUTTSCHATZKARTE].rcDes.bottom=Bmp[BUTTSCHATZKARTE].rcDes.top+35;
	Bmp[BUTTSCHATZKARTE].Breite = (Bmp[BUTTSCHATZKARTE].rcSrc.right - Bmp[BUTTSCHATZKARTE].rcSrc.left);
	Bmp[BUTTSCHATZKARTE].Hoehe = (Bmp[BUTTSCHATZKARTE].rcSrc.bottom - Bmp[BUTTSCHATZKARTE].rcSrc.top);
	Bmp[BUTTSCHATZKARTE].Anzahl = 4;
	Bmp[BUTTSCHATZKARTE].Geschwindigkeit = 3;
	Bmp[BUTTSCHATZKARTE].Phase = -1;

	//BUTTSCHATZ
	Bmp[BUTTSCHATZ].rcSrc.left = 133;
	Bmp[BUTTSCHATZ].rcSrc.top  = 175;
	Bmp[BUTTSCHATZ].rcSrc.right= 133+35;
	Bmp[BUTTSCHATZ].rcSrc.bottom=175+35; 
	Bmp[BUTTSCHATZ].rcDes.left = rcPanel.left+29;
	Bmp[BUTTSCHATZ].rcDes.top  = rcPanel.top+316;
	Bmp[BUTTSCHATZ].rcDes.right= Bmp[BUTTSCHATZ].rcDes.left+35;
	Bmp[BUTTSCHATZ].rcDes.bottom=Bmp[BUTTSCHATZ].rcDes.top+35;
	Bmp[BUTTSCHATZ].Breite = (Bmp[BUTTSCHATZ].rcSrc.right - Bmp[BUTTSCHATZ].rcSrc.left);
	Bmp[BUTTSCHATZ].Hoehe = (Bmp[BUTTSCHATZ].rcSrc.bottom - Bmp[BUTTSCHATZ].rcSrc.top);
	Bmp[BUTTSCHATZ].Anzahl = 4;
	Bmp[BUTTSCHATZ].Geschwindigkeit = 3;
	Bmp[BUTTSCHATZ].Phase = -1;

	//BUTTSCHLEUDER
	Bmp[BUTTSCHLEUDER].rcSrc.left = 168;
	Bmp[BUTTSCHLEUDER].rcSrc.top  = 175;
	Bmp[BUTTSCHLEUDER].rcSrc.right= 168+35;
	Bmp[BUTTSCHLEUDER].rcSrc.bottom=175+35; 
	Bmp[BUTTSCHLEUDER].rcDes.left = rcPanel.left+70;
	Bmp[BUTTSCHLEUDER].rcDes.top  = rcPanel.top+316;
	Bmp[BUTTSCHLEUDER].rcDes.right= Bmp[BUTTSCHLEUDER].rcDes.left+35;
	Bmp[BUTTSCHLEUDER].rcDes.bottom=Bmp[BUTTSCHLEUDER].rcDes.top+35;
	Bmp[BUTTSCHLEUDER].Breite = (Bmp[BUTTSCHLEUDER].rcSrc.right - Bmp[BUTTSCHLEUDER].rcSrc.left);
	Bmp[BUTTSCHLEUDER].Hoehe = (Bmp[BUTTSCHLEUDER].rcSrc.bottom - Bmp[BUTTSCHLEUDER].rcSrc.top);
	Bmp[BUTTSCHLEUDER].Anzahl = 4;
	Bmp[BUTTSCHLEUDER].Geschwindigkeit = 3;
	Bmp[BUTTSCHLEUDER].Phase = -1;

	//BUTTFELD
	Bmp[BUTTFELD].rcSrc.left = 238;
	Bmp[BUTTFELD].rcSrc.top  = 0;
	Bmp[BUTTFELD].rcSrc.right= 238+35;
	Bmp[BUTTFELD].rcSrc.bottom=35; 
	Bmp[BUTTFELD].rcDes.left = rcPanel.left+70;
	Bmp[BUTTFELD].rcDes.top  = rcPanel.top+220;
	Bmp[BUTTFELD].rcDes.right= Bmp[BUTTFELD].rcDes.left+35;
	Bmp[BUTTFELD].rcDes.bottom=Bmp[BUTTFELD].rcDes.top+35;
	Bmp[BUTTFELD].Breite = (Bmp[BUTTFELD].rcSrc.right - Bmp[BUTTFELD].rcSrc.left);
	Bmp[BUTTFELD].Hoehe = (Bmp[BUTTFELD].rcSrc.bottom - Bmp[BUTTFELD].rcSrc.top);
	Bmp[BUTTFELD].Anzahl = 4;
	Bmp[BUTTFELD].Geschwindigkeit = 3;
	Bmp[BUTTFELD].Phase  = -1; 

	//BUTTZELT
	Bmp[BUTTZELT].rcSrc.left = 273;
	Bmp[BUTTZELT].rcSrc.top  = 0;
	Bmp[BUTTZELT].rcSrc.right= 273+35;
	Bmp[BUTTZELT].rcSrc.bottom=35; 
	Bmp[BUTTZELT].rcDes.left = rcPanel.left+29;
	Bmp[BUTTZELT].rcDes.top  = rcPanel.top+220;
	Bmp[BUTTZELT].rcDes.right= Bmp[BUTTZELT].rcDes.left+35;
	Bmp[BUTTZELT].rcDes.bottom=Bmp[BUTTZELT].rcDes.top+35;
	Bmp[BUTTZELT].Breite = (Bmp[BUTTZELT].rcSrc.right - Bmp[BUTTZELT].rcSrc.left);
	Bmp[BUTTZELT].Hoehe = (Bmp[BUTTZELT].rcSrc.bottom - Bmp[BUTTZELT].rcSrc.top);
	Bmp[BUTTZELT].Anzahl = 3;
	Bmp[BUTTZELT].Geschwindigkeit = 3;
	Bmp[BUTTZELT].Phase  = 0; 

	//BUTTBOOT
	Bmp[BUTTBOOT].rcSrc.left = 448;
	Bmp[BUTTBOOT].rcSrc.top  = 0;
	Bmp[BUTTBOOT].rcSrc.right= 448+35;
	Bmp[BUTTBOOT].rcSrc.bottom=35; 
	Bmp[BUTTBOOT].rcDes.left = rcPanel.left+111;
	Bmp[BUTTBOOT].rcDes.top  = rcPanel.top+220;
	Bmp[BUTTBOOT].rcDes.right= Bmp[BUTTBOOT].rcDes.left+35;
	Bmp[BUTTBOOT].rcDes.bottom=Bmp[BUTTBOOT].rcDes.top+35;
	Bmp[BUTTBOOT].Breite = (Bmp[BUTTBOOT].rcSrc.right - Bmp[BUTTBOOT].rcSrc.left);
	Bmp[BUTTBOOT].Hoehe = (Bmp[BUTTBOOT].rcSrc.bottom - Bmp[BUTTBOOT].rcSrc.top);
	Bmp[BUTTBOOT].Anzahl = 3;
	Bmp[BUTTBOOT].Geschwindigkeit = 3;
	Bmp[BUTTBOOT].Phase  = -1; 

	//BUTTROHR
	Bmp[BUTTROHR].rcSrc.left = 518;
	Bmp[BUTTROHR].rcSrc.top  = 0;
	Bmp[BUTTROHR].rcSrc.right= 518+35;
	Bmp[BUTTROHR].rcSrc.bottom=35; 
	Bmp[BUTTROHR].rcDes.left = rcPanel.left+152;
	Bmp[BUTTROHR].rcDes.top  = rcPanel.top+220;
	Bmp[BUTTROHR].rcDes.right= Bmp[BUTTROHR].rcDes.left+35;
	Bmp[BUTTROHR].rcDes.bottom=Bmp[BUTTROHR].rcDes.top+35;
	Bmp[BUTTROHR].Breite = (Bmp[BUTTROHR].rcSrc.right - Bmp[BUTTROHR].rcSrc.left);
	Bmp[BUTTROHR].Hoehe = (Bmp[BUTTROHR].rcSrc.bottom - Bmp[BUTTROHR].rcSrc.top);
	Bmp[BUTTROHR].Anzahl = 4;
	Bmp[BUTTROHR].Geschwindigkeit = 2;
	Bmp[BUTTROHR].Phase  = -1; 

	//BUTTSOS
	Bmp[BUTTSOS].rcSrc.left = 588;
	Bmp[BUTTSOS].rcSrc.top  = 0;
	Bmp[BUTTSOS].rcSrc.right= 588+35;
	Bmp[BUTTSOS].rcSrc.bottom=35; 
	Bmp[BUTTSOS].rcDes.left = rcPanel.left+29;
	Bmp[BUTTSOS].rcDes.top  = rcPanel.top+268;
	Bmp[BUTTSOS].rcDes.right= Bmp[BUTTSOS].rcDes.left+35;
	Bmp[BUTTSOS].rcDes.bottom=Bmp[BUTTSOS].rcDes.top+35;
	Bmp[BUTTSOS].Breite = (Bmp[BUTTSOS].rcSrc.right - Bmp[BUTTSOS].rcSrc.left);
	Bmp[BUTTSOS].Hoehe = (Bmp[BUTTSOS].rcSrc.bottom - Bmp[BUTTSOS].rcSrc.top);
	Bmp[BUTTSOS].Anzahl = 3;
	Bmp[BUTTSOS].Geschwindigkeit = 2;

	//BUTTHAUS1
	Bmp[BUTTHAUS1].rcSrc.left = 623;
	Bmp[BUTTHAUS1].rcSrc.top  = 0;
	Bmp[BUTTHAUS1].rcSrc.right= 623+35;
	Bmp[BUTTHAUS1].rcSrc.bottom=35; 
	Bmp[BUTTHAUS1].rcDes.left = rcPanel.left+70;
	Bmp[BUTTHAUS1].rcDes.top  = rcPanel.top+268;
	Bmp[BUTTHAUS1].rcDes.right= Bmp[BUTTHAUS1].rcDes.left+35;
	Bmp[BUTTHAUS1].rcDes.bottom=Bmp[BUTTHAUS1].rcDes.top+35;
	Bmp[BUTTHAUS1].Breite = (Bmp[BUTTHAUS1].rcSrc.right - Bmp[BUTTHAUS1].rcSrc.left);
	Bmp[BUTTHAUS1].Hoehe = (Bmp[BUTTHAUS1].rcSrc.bottom - Bmp[BUTTHAUS1].rcSrc.top);
	Bmp[BUTTHAUS1].Anzahl = 5;
	Bmp[BUTTHAUS1].Geschwindigkeit = 3;
	Bmp[BUTTHAUS1].Phase = -1;

	//BUTTHAUS2
	Bmp[BUTTHAUS2].rcSrc.left = 658;
	Bmp[BUTTHAUS2].rcSrc.top  = 0;
	Bmp[BUTTHAUS2].rcSrc.right= 658+35;
	Bmp[BUTTHAUS2].rcSrc.bottom=35; 
	Bmp[BUTTHAUS2].rcDes.left = rcPanel.left+111;
	Bmp[BUTTHAUS2].rcDes.top  = rcPanel.top+268;
	Bmp[BUTTHAUS2].rcDes.right= Bmp[BUTTHAUS2].rcDes.left+35;
	Bmp[BUTTHAUS2].rcDes.bottom=Bmp[BUTTHAUS2].rcDes.top+35;
	Bmp[BUTTHAUS2].Breite = (Bmp[BUTTHAUS2].rcSrc.right - Bmp[BUTTHAUS2].rcSrc.left);
	Bmp[BUTTHAUS2].Hoehe = (Bmp[BUTTHAUS2].rcSrc.bottom - Bmp[BUTTHAUS2].rcSrc.top);
	Bmp[BUTTHAUS2].Anzahl = 4;
	Bmp[BUTTHAUS2].Geschwindigkeit = 3;
	Bmp[BUTTHAUS2].Phase = -1;

	//BUTTHAUS3
	Bmp[BUTTHAUS3].rcSrc.left = 693;
	Bmp[BUTTHAUS3].rcSrc.top  = 0;
	Bmp[BUTTHAUS3].rcSrc.right= 693+35;
	Bmp[BUTTHAUS3].rcSrc.bottom=35; 
	Bmp[BUTTHAUS3].rcDes.left = rcPanel.left+152;
	Bmp[BUTTHAUS3].rcDes.top  = rcPanel.top+268;
	Bmp[BUTTHAUS3].rcDes.right= Bmp[BUTTHAUS3].rcDes.left+35;
	Bmp[BUTTHAUS3].rcDes.bottom=Bmp[BUTTHAUS3].rcDes.top+35;
	Bmp[BUTTHAUS3].Breite = (Bmp[BUTTHAUS3].rcSrc.right - Bmp[BUTTHAUS3].rcSrc.left);
	Bmp[BUTTHAUS3].Hoehe = (Bmp[BUTTHAUS3].rcSrc.bottom - Bmp[BUTTHAUS3].rcSrc.top);
	Bmp[BUTTHAUS3].Anzahl = 4;
	Bmp[BUTTHAUS3].Geschwindigkeit = 3;
	Bmp[BUTTHAUS3].Phase = -1;

	//BUTTFEUERST
	Bmp[BUTTFEUERST].rcSrc.left = 728;
	Bmp[BUTTFEUERST].rcSrc.top  = 0;
	Bmp[BUTTFEUERST].rcSrc.right= 728+35;
	Bmp[BUTTFEUERST].rcSrc.bottom=35; 
	Bmp[BUTTFEUERST].rcDes.left = rcPanel.left+29;
	Bmp[BUTTFEUERST].rcDes.top  = rcPanel.top+316;
	Bmp[BUTTFEUERST].rcDes.right= Bmp[BUTTFEUERST].rcDes.left+35;
	Bmp[BUTTFEUERST].rcDes.bottom=Bmp[BUTTFEUERST].rcDes.top+35;
	Bmp[BUTTFEUERST].Breite = (Bmp[BUTTFEUERST].rcSrc.right - Bmp[BUTTFEUERST].rcSrc.left);
	Bmp[BUTTFEUERST].Hoehe = (Bmp[BUTTFEUERST].rcSrc.bottom - Bmp[BUTTFEUERST].rcSrc.top);
	Bmp[BUTTFEUERST].Anzahl = 4;
	Bmp[BUTTFEUERST].Geschwindigkeit = 3;

	//BUTTFRAGEZ
	Bmp[BUTTFRAGEZ].rcSrc.left = 203;
	Bmp[BUTTFRAGEZ].rcSrc.top  = 175;
	Bmp[BUTTFRAGEZ].rcSrc.right= 203+35;
	Bmp[BUTTFRAGEZ].rcSrc.bottom=175+35; 
	Bmp[BUTTFRAGEZ].rcDes.left = 0;
	Bmp[BUTTFRAGEZ].rcDes.top  = 0;
	Bmp[BUTTFRAGEZ].rcDes.right= 0+35;
	Bmp[BUTTFRAGEZ].rcDes.bottom=0+35;
	Bmp[BUTTFRAGEZ].Breite = (Bmp[BUTTFRAGEZ].rcSrc.right - Bmp[BUTTFRAGEZ].rcSrc.left);
	Bmp[BUTTFRAGEZ].Hoehe = (Bmp[BUTTFRAGEZ].rcSrc.bottom - Bmp[BUTTFRAGEZ].rcSrc.top);
	Bmp[BUTTFRAGEZ].Anzahl = 1;
	Bmp[BUTTFRAGEZ].Geschwindigkeit = 0;

	//BUTTDESTROY
	Bmp[BUTTDESTROY].rcSrc.left = 553;
	Bmp[BUTTDESTROY].rcSrc.top  = 0;
	Bmp[BUTTDESTROY].rcSrc.right= 553+35;
	Bmp[BUTTDESTROY].rcSrc.bottom=35; 
	Bmp[BUTTDESTROY].rcDes.left = rcPanel.left+152;
	Bmp[BUTTDESTROY].rcDes.top  = rcPanel.top+316;
	Bmp[BUTTDESTROY].rcDes.right= Bmp[BUTTDESTROY].rcDes.left+35;
	Bmp[BUTTDESTROY].rcDes.bottom=Bmp[BUTTDESTROY].rcDes.top+35;
	Bmp[BUTTDESTROY].Breite = (Bmp[BUTTDESTROY].rcSrc.right - Bmp[BUTTDESTROY].rcSrc.left);
	Bmp[BUTTDESTROY].Hoehe = (Bmp[BUTTDESTROY].rcSrc.bottom - Bmp[BUTTDESTROY].rcSrc.top);
	Bmp[BUTTDESTROY].Anzahl = 4;
	Bmp[BUTTDESTROY].Geschwindigkeit = 5;

	//SpzAni
	for (let i=BAUM1DOWN; i<=BAUM4DOWN; i++) {
		Bmp[i].Animation = true;
		Bmp[i].Surface = lpDDSBaum;
		Bmp[i].Phase  = 0;
		Bmp[i].rcDes.left = 0;
		Bmp[i].rcDes.top  = 0;
		Bmp[i].rcDes.right= 0;
		Bmp[i].rcDes.bottom=0;
		Bmp[i].Anzahl = 3;
		Bmp[i].Geschwindigkeit = 4;
	}
	//BAUM1DOWN
	Bmp[BAUM1DOWN].rcSrc.left = 101;
	Bmp[BAUM1DOWN].rcSrc.top  = 0;
	Bmp[BAUM1DOWN].rcSrc.right= 101+35;
	Bmp[BAUM1DOWN].rcSrc.bottom=27; 
	Bmp[BAUM1DOWN].Breite = (Bmp[BAUM1DOWN].rcSrc.right - Bmp[BAUM1DOWN].rcSrc.left);
	Bmp[BAUM1DOWN].Hoehe = (Bmp[BAUM1DOWN].rcSrc.bottom - Bmp[BAUM1DOWN].rcSrc.top);

	//BAUM2DOWN
	Bmp[BAUM2DOWN].rcSrc.left = 136;
	Bmp[BAUM2DOWN].rcSrc.top  = 0;
	Bmp[BAUM2DOWN].rcSrc.right= 136+36;
	Bmp[BAUM2DOWN].rcSrc.bottom=27; 
	Bmp[BAUM2DOWN].Breite = (Bmp[BAUM2DOWN].rcSrc.right - Bmp[BAUM2DOWN].rcSrc.left);
	Bmp[BAUM2DOWN].Hoehe = (Bmp[BAUM2DOWN].rcSrc.bottom - Bmp[BAUM2DOWN].rcSrc.top);

	//BAUM3DOWN
	Bmp[BAUM3DOWN].rcSrc.left = 172;
	Bmp[BAUM3DOWN].rcSrc.top  = 0;
	Bmp[BAUM3DOWN].rcSrc.right= 172+34;
	Bmp[BAUM3DOWN].rcSrc.bottom=28; 
	Bmp[BAUM3DOWN].Breite = (Bmp[BAUM3DOWN].rcSrc.right - Bmp[BAUM3DOWN].rcSrc.left);
	Bmp[BAUM3DOWN].Hoehe = (Bmp[BAUM3DOWN].rcSrc.bottom - Bmp[BAUM3DOWN].rcSrc.top);

	//BAUM4DOWN
	Bmp[BAUM4DOWN].rcSrc.left = 206;
	Bmp[BAUM4DOWN].rcSrc.top  = 0;
	Bmp[BAUM4DOWN].rcSrc.right= 206+32;
	Bmp[BAUM4DOWN].rcSrc.bottom=17; 
	Bmp[BAUM4DOWN].Breite = (Bmp[BAUM4DOWN].rcSrc.right - Bmp[BAUM4DOWN].rcSrc.left);
	Bmp[BAUM4DOWN].Hoehe = (Bmp[BAUM4DOWN].rcSrc.bottom - Bmp[BAUM4DOWN].rcSrc.top);
	
	//Sonstiges

	//Säule1
	Bmp[SAEULE1].Anzahl = 1;
	Bmp[SAEULE1].rcSrc.left = 205;
	Bmp[SAEULE1].rcSrc.top  = 115;
	Bmp[SAEULE1].rcSrc.right= Bmp[SAEULE1].rcSrc.left+11;
	Bmp[SAEULE1].rcSrc.bottom=Bmp[SAEULE1].rcSrc.top +95;
	Bmp[SAEULE1].rcDes.left = rcPanel.left+52;
	Bmp[SAEULE1].rcDes.top  = rcPanel.top+393;
	Bmp[SAEULE1].rcDes.right= Bmp[SAEULE1].rcDes.left+11;
	Bmp[SAEULE1].rcDes.bottom=Bmp[SAEULE1].rcDes.top+95;
	Bmp[SAEULE1].Breite = (Bmp[SAEULE1].rcSrc.right - Bmp[SAEULE1].rcSrc.left);
	Bmp[SAEULE1].Hoehe = (Bmp[SAEULE1].rcSrc.bottom - Bmp[SAEULE1].rcSrc.top);
	Bmp[SAEULE1].Surface = lpDDSPanel;
	
	//Säule2
	Bmp[SAEULE2].Anzahl = 1;
	Bmp[SAEULE2].rcSrc.left = 216;
	Bmp[SAEULE2].rcSrc.top  = 115;
	Bmp[SAEULE2].rcSrc.right= Bmp[SAEULE2].rcSrc.left+11;
	Bmp[SAEULE2].rcSrc.bottom=Bmp[SAEULE2].rcSrc.top +95;
	Bmp[SAEULE2].rcDes.left = rcPanel.left+114;
	Bmp[SAEULE2].rcDes.top  = rcPanel.top+393;
	Bmp[SAEULE2].rcDes.right= Bmp[SAEULE2].rcDes.left+11;
	Bmp[SAEULE2].rcDes.bottom=Bmp[SAEULE2].rcDes.top+95;
	Bmp[SAEULE2].Breite = (Bmp[SAEULE2].rcSrc.right - Bmp[SAEULE2].rcSrc.left);
	Bmp[SAEULE2].Hoehe = (Bmp[SAEULE2].rcSrc.bottom - Bmp[SAEULE2].rcSrc.top);
	Bmp[SAEULE2].Surface = lpDDSPanel;
	
	//Säule3
	Bmp[SAEULE3].Anzahl = 1;
	Bmp[SAEULE3].rcSrc.left = 227;
	Bmp[SAEULE3].rcSrc.top  = 115;
	Bmp[SAEULE3].rcSrc.right= Bmp[SAEULE3].rcSrc.left+11;
	Bmp[SAEULE3].rcSrc.bottom=Bmp[SAEULE3].rcSrc.top +95;
	Bmp[SAEULE3].rcDes.left = rcPanel.left+175;
	Bmp[SAEULE3].rcDes.top  = rcPanel.top+393;
	Bmp[SAEULE3].rcDes.right= Bmp[SAEULE3].rcDes.left+11;
	Bmp[SAEULE3].rcDes.bottom=Bmp[SAEULE3].rcDes.top+95;
	Bmp[SAEULE3].Breite = (Bmp[SAEULE3].rcSrc.right - Bmp[SAEULE3].rcSrc.left);
	Bmp[SAEULE3].Hoehe = (Bmp[SAEULE3].rcSrc.bottom - Bmp[SAEULE3].rcSrc.top);
	Bmp[SAEULE3].Surface = lpDDSPanel;

	//Rohstoffe
	for(i=ROHAST;i<=ROHSCHLEUDER;i++)
	{
		Bmp[i].Anzahl = 1;
		Bmp[i].rcSrc.left = 18+(i-ROHAST)*16;
		Bmp[i].rcSrc.top  = 0;
		Bmp[i].rcSrc.right= Bmp[i].rcSrc.left+16;
		Bmp[i].rcSrc.bottom=Bmp[i].rcSrc.top +15;
		Bmp[i].Breite = (Bmp[i].rcSrc.right - Bmp[i].rcSrc.left);
		Bmp[i].Hoehe = (Bmp[i].rcSrc.bottom - Bmp[i].rcSrc.top);
		Bmp[i].Surface = lpDDSInventar;
	}
	//RohAst
	Bmp[ROHAST].rcDes.left = rcPanel.left+34;
	Bmp[ROHAST].rcDes.top  = rcPanel.top+230;
	Bmp[ROHAST].rcDes.right= Bmp[ROHAST].rcDes.left+16;
	Bmp[ROHAST].rcDes.bottom=Bmp[ROHAST].rcDes.top +15;
	//ROHSTEIN
	Bmp[ROHSTEIN].rcDes.left = rcPanel.left+34;
	Bmp[ROHSTEIN].rcDes.top  = rcPanel.top+250;
	Bmp[ROHSTEIN].rcDes.right= Bmp[ROHSTEIN].rcDes.left+16;
	Bmp[ROHSTEIN].rcDes.bottom=Bmp[ROHSTEIN].rcDes.top +15;
	//ROHSTAMM
	Bmp[ROHSTAMM].rcDes.left = rcPanel.left+34;
	Bmp[ROHSTAMM].rcDes.top  = rcPanel.top+310;
	Bmp[ROHSTAMM].rcDes.right= Bmp[ROHSTAMM].rcDes.left+16;
	Bmp[ROHSTAMM].rcDes.bottom=Bmp[ROHSTAMM].rcDes.top +15;
	//ROHAXT
	Bmp[ROHAXT].rcDes.left = rcPanel.left+150;
	Bmp[ROHAXT].rcDes.top  = rcPanel.top+230;
	Bmp[ROHAXT].rcDes.right= Bmp[ROHAXT].rcDes.left+16;
	Bmp[ROHAXT].rcDes.bottom=Bmp[ROHAXT].rcDes.top +15;
	//ROHBLATT
	Bmp[ROHBLATT].rcDes.left = rcPanel.left+34;
	Bmp[ROHBLATT].rcDes.top  = rcPanel.top+270;
	Bmp[ROHBLATT].rcDes.right= Bmp[ROHBLATT].rcDes.left+16;
	Bmp[ROHBLATT].rcDes.bottom=Bmp[ROHBLATT].rcDes.top +15;
	//ROHEGGE
	Bmp[ROHEGGE].rcDes.left = rcPanel.left+150;
	Bmp[ROHEGGE].rcDes.top  = rcPanel.top+250;
	Bmp[ROHEGGE].rcDes.right= Bmp[ROHEGGE].rcDes.left+16;
	Bmp[ROHEGGE].rcDes.bottom=Bmp[ROHEGGE].rcDes.top +15;
	//ROHLIANE
	Bmp[ROHLIANE].rcDes.left = rcPanel.left+34;
	Bmp[ROHLIANE].rcDes.top  = rcPanel.top+290;
	Bmp[ROHLIANE].rcDes.right= Bmp[ROHLIANE].rcDes.left+16;
	Bmp[ROHLIANE].rcDes.bottom=Bmp[ROHLIANE].rcDes.top +15;
	//ROHANGEL
	Bmp[ROHANGEL].rcDes.left = rcPanel.left+150;
	Bmp[ROHANGEL].rcDes.top  = rcPanel.top+270;
	Bmp[ROHANGEL].rcDes.right= Bmp[ROHANGEL].rcDes.left+16;
	Bmp[ROHANGEL].rcDes.bottom=Bmp[ROHANGEL].rcDes.top +15;
	//ROHHAMMER
	Bmp[ROHHAMMER].rcDes.left = rcPanel.left+150;
	Bmp[ROHHAMMER].rcDes.top  = rcPanel.top+290;
	Bmp[ROHHAMMER].rcDes.right= Bmp[ROHHAMMER].rcDes.left+16;
	Bmp[ROHHAMMER].rcDes.bottom=Bmp[ROHHAMMER].rcDes.top +15;
	//ROHFERNROHR
	Bmp[ROHFERNROHR].rcDes.left = rcPanel.left+150;
	Bmp[ROHFERNROHR].rcDes.top  = rcPanel.top+310;
	Bmp[ROHFERNROHR].rcDes.right= Bmp[ROHFERNROHR].rcDes.left+16;
	Bmp[ROHFERNROHR].rcDes.bottom=Bmp[ROHFERNROHR].rcDes.top +15;
	//ROHSTREICHHOLZ
	Bmp[ROHSTREICHHOLZ].rcDes.left = rcPanel.left+105;
	Bmp[ROHSTREICHHOLZ].rcDes.top  = rcPanel.top+230;
	Bmp[ROHSTREICHHOLZ].rcDes.right= Bmp[ROHSTREICHHOLZ].rcDes.left+16;
	Bmp[ROHSTREICHHOLZ].rcDes.bottom=Bmp[ROHSTREICHHOLZ].rcDes.top +15;
	//ROHSCHAUFEL
	Bmp[ROHSCHAUFEL].rcDes.left = rcPanel.left+105;
	Bmp[ROHSCHAUFEL].rcDes.top  = rcPanel.top+250;
	Bmp[ROHSCHAUFEL].rcDes.right= Bmp[ROHSCHAUFEL].rcDes.left+16;
	Bmp[ROHSCHAUFEL].rcDes.bottom=Bmp[ROHSCHAUFEL].rcDes.top +15;
	//ROHKARTE
	Bmp[ROHKARTE].rcDes.left = rcPanel.left+105;
	Bmp[ROHKARTE].rcDes.top  = rcPanel.top+270;
	Bmp[ROHKARTE].rcDes.right= Bmp[ROHKARTE].rcDes.left+16;
	Bmp[ROHKARTE].rcDes.bottom=Bmp[ROHKARTE].rcDes.top +15;
	//ROHSCHLEUDER
	Bmp[ROHSCHLEUDER].rcDes.left = rcPanel.left+105;
	Bmp[ROHSCHLEUDER].rcDes.top  = rcPanel.top+290;
	Bmp[ROHSCHLEUDER].rcDes.right= Bmp[ROHSCHLEUDER].rcDes.left+16;
	Bmp[ROHSCHLEUDER].rcDes.bottom=Bmp[ROHSCHLEUDER].rcDes.top +15;

	//ROEMISCH1
	Bmp[ROEMISCH1].Anzahl = 1;
	Bmp[ROEMISCH1].rcSrc.left = 0;
	Bmp[ROEMISCH1].rcSrc.top  = 0;
	Bmp[ROEMISCH1].rcSrc.right= Bmp[ROEMISCH1].rcSrc.left+3;
	Bmp[ROEMISCH1].rcSrc.bottom=Bmp[ROEMISCH1].rcSrc.top +13;
	Bmp[ROEMISCH1].rcDes.left = rcPanel.left+50;
	Bmp[ROEMISCH1].rcDes.top  = rcPanel.top;
	Bmp[ROEMISCH1].rcDes.right= Bmp[ROEMISCH1].rcDes.left+3;
	Bmp[ROEMISCH1].rcDes.bottom=Bmp[ROEMISCH1].rcDes.top+13;
	Bmp[ROEMISCH1].Breite = (Bmp[ROEMISCH1].rcSrc.right - Bmp[ROEMISCH1].rcSrc.left);
	Bmp[ROEMISCH1].Hoehe = (Bmp[ROEMISCH1].rcSrc.bottom - Bmp[ROEMISCH1].rcSrc.top);
	Bmp[ROEMISCH1].Surface = lpDDSInventar;
	
	//ROEMISCH2
	Bmp[ROEMISCH2].Anzahl = 1;
	Bmp[ROEMISCH2].rcSrc.left = 3;
	Bmp[ROEMISCH2].rcSrc.top  = 0;
	Bmp[ROEMISCH2].rcSrc.right= Bmp[ROEMISCH2].rcSrc.left+15;
	Bmp[ROEMISCH2].rcSrc.bottom=Bmp[ROEMISCH2].rcSrc.top +10;
	Bmp[ROEMISCH2].rcDes.left = rcPanel.left+50;
	Bmp[ROEMISCH2].rcDes.top  = rcPanel.top;
	Bmp[ROEMISCH2].rcDes.right= Bmp[ROEMISCH2].rcDes.left+15;
	Bmp[ROEMISCH2].rcDes.bottom=Bmp[ROEMISCH2].rcDes.top+10;
	Bmp[ROEMISCH2].Breite = (Bmp[ROEMISCH2].rcSrc.right - Bmp[ROEMISCH2].rcSrc.left);
	Bmp[ROEMISCH2].Hoehe = (Bmp[ROEMISCH2].rcSrc.bottom - Bmp[ROEMISCH2].rcSrc.top);
	Bmp[ROEMISCH2].Surface = lpDDSInventar;


	//INVPAPIER
	Bmp[INVPAPIER].Anzahl = 1;
	Bmp[INVPAPIER].rcSrc.left = 0;
	Bmp[INVPAPIER].rcSrc.top  = 15;
	Bmp[INVPAPIER].rcSrc.right= Bmp[INVPAPIER].rcSrc.left+178;
	Bmp[INVPAPIER].rcSrc.bottom=Bmp[INVPAPIER].rcSrc.top +114;
	Bmp[INVPAPIER].rcDes.left = rcPanel.left+15;
	Bmp[INVPAPIER].rcDes.top  = rcPanel.top+220;
	Bmp[INVPAPIER].rcDes.right= Bmp[INVPAPIER].rcDes.left+178;
	Bmp[INVPAPIER].rcDes.bottom=Bmp[INVPAPIER].rcDes.top+114;
	Bmp[INVPAPIER].Breite = (Bmp[INVPAPIER].rcSrc.right - Bmp[INVPAPIER].rcSrc.left);
	Bmp[INVPAPIER].Hoehe = (Bmp[INVPAPIER].rcSrc.bottom - Bmp[INVPAPIER].rcSrc.top);
	Bmp[INVPAPIER].Surface = lpDDSInventar;
	
	//RING
	Bmp[RING].Anzahl = 1;
	Bmp[RING].rcSrc.left = 205;
	Bmp[RING].rcSrc.top  = 210;
	Bmp[RING].rcSrc.right= Bmp[RING].rcSrc.left+37;
	Bmp[RING].rcSrc.bottom=Bmp[RING].rcSrc.top +150;
	Bmp[RING].rcDes.left = rcPanel.left+5;
	Bmp[RING].rcDes.top  = rcPanel.top-113;
	Bmp[RING].rcDes.right= Bmp[RING].rcDes.left+30;
	Bmp[RING].rcDes.bottom=Bmp[RING].rcDes.top;
	Bmp[RING].Breite = (Bmp[RING].rcSrc.right - Bmp[RING].rcSrc.left);
	Bmp[RING].Hoehe = (Bmp[RING].rcSrc.bottom - Bmp[RING].rcSrc.top);
	Bmp[RING].Surface = lpDDSPanel;
	
	//KREUZ
	Bmp[KREUZ].Anzahl = 1;
	Bmp[KREUZ].rcSrc.left = 205;
	Bmp[KREUZ].rcSrc.top  = 360;
	Bmp[KREUZ].rcSrc.right= Bmp[KREUZ].rcSrc.left+40;
	Bmp[KREUZ].rcSrc.bottom=Bmp[KREUZ].rcSrc.top +22;
	Bmp[KREUZ].Breite = (Bmp[KREUZ].rcSrc.right - Bmp[KREUZ].rcSrc.left);
	Bmp[KREUZ].Hoehe = (Bmp[KREUZ].rcSrc.bottom - Bmp[KREUZ].rcSrc.top);
	Bmp[KREUZ].Surface = lpDDSPanel;

	//JA
	Bmp[JA].Anzahl = 1;
	Bmp[JA].rcSrc.left = 0;
	Bmp[JA].rcSrc.top  = 154;
	Bmp[JA].rcSrc.right= Bmp[JA].rcSrc.left+41;
	Bmp[JA].rcSrc.bottom=Bmp[JA].rcSrc.top +42;
	Bmp[JA].Breite = (Bmp[JA].rcSrc.right - Bmp[JA].rcSrc.left);
	Bmp[JA].Hoehe = (Bmp[JA].rcSrc.bottom - Bmp[JA].rcSrc.top);
	Bmp[JA].Surface = lpDDSPapier;

	//NEIN
	Bmp[NEIN].Anzahl = 1;
	Bmp[NEIN].rcSrc.left = 41;
	Bmp[NEIN].rcSrc.top  = 154;
	Bmp[NEIN].rcSrc.right= Bmp[NEIN].rcSrc.left+100;
	Bmp[NEIN].rcSrc.bottom=Bmp[NEIN].rcSrc.top +39;
	Bmp[NEIN].Breite = (Bmp[NEIN].rcSrc.right - Bmp[NEIN].rcSrc.left);
	Bmp[NEIN].Hoehe = (Bmp[NEIN].rcSrc.bottom - Bmp[NEIN].rcSrc.top);
	Bmp[NEIN].Surface = lpDDSPapier;

	//Sonne
	Bmp[SONNE].Anzahl = 1;
	Bmp[SONNE].rcSrc.left = 205;
	Bmp[SONNE].rcSrc.top  = 65;
	Bmp[SONNE].rcSrc.right= Bmp[SONNE].rcSrc.left+51;
	Bmp[SONNE].rcSrc.bottom=Bmp[SONNE].rcSrc.top +50;
	Bmp[SONNE].rcDes.left = rcPanel.left+30;
	Bmp[SONNE].rcDes.top  = rcPanel.top+518;
	Bmp[SONNE].rcDes.right= Bmp[SONNE].rcDes.left+152;
	Bmp[SONNE].rcDes.bottom=Bmp[SONNE].rcDes.top+55;
	Bmp[SONNE].Breite = (Bmp[SONNE].rcSrc.right - Bmp[SONNE].rcSrc.left);
	Bmp[SONNE].Hoehe = (Bmp[SONNE].rcSrc.bottom - Bmp[SONNE].rcSrc.top);
	Bmp[SONNE].Surface = lpDDSPanel;

	//PROGRAMMIERUNG
	Bmp[PROGRAMMIERUNG].Anzahl = 1;
	Bmp[PROGRAMMIERUNG].rcSrc.left = 0;
	Bmp[PROGRAMMIERUNG].rcSrc.top  = 0;
	Bmp[PROGRAMMIERUNG].rcSrc.right= Bmp[PROGRAMMIERUNG].rcSrc.left+348;
	Bmp[PROGRAMMIERUNG].rcSrc.bottom=Bmp[PROGRAMMIERUNG].rcSrc.top +49;
	Bmp[PROGRAMMIERUNG].Breite = (Bmp[PROGRAMMIERUNG].rcSrc.right - Bmp[PROGRAMMIERUNG].rcSrc.left);
	Bmp[PROGRAMMIERUNG].Hoehe = (Bmp[PROGRAMMIERUNG].rcSrc.bottom - Bmp[PROGRAMMIERUNG].rcSrc.top);
	Bmp[PROGRAMMIERUNG].rcDes.left = MAXX/2-Bmp[PROGRAMMIERUNG].Breite/2;
	Bmp[PROGRAMMIERUNG].rcDes.top  = MAXY-Bmp[PROGRAMMIERUNG].Hoehe/2;
	Bmp[PROGRAMMIERUNG].rcDes.right= Bmp[PROGRAMMIERUNG].rcDes.left+Bmp[PROGRAMMIERUNG].Breite;
	Bmp[PROGRAMMIERUNG].rcDes.bottom=Bmp[PROGRAMMIERUNG].rcDes.top+Bmp[PROGRAMMIERUNG].Hoehe;
	Bmp[PROGRAMMIERUNG].Surface = lpDDSCredits;
	
	//DIRKPLATE
	Bmp[DIRKPLATE].Anzahl = 1;
	Bmp[DIRKPLATE].rcSrc.left = 0;
	Bmp[DIRKPLATE].rcSrc.top  = 49;
	Bmp[DIRKPLATE].rcSrc.right= Bmp[DIRKPLATE].rcSrc.left+196;
	Bmp[DIRKPLATE].rcSrc.bottom=Bmp[DIRKPLATE].rcSrc.top +47;
	Bmp[DIRKPLATE].Breite = (Bmp[DIRKPLATE].rcSrc.right - Bmp[DIRKPLATE].rcSrc.left);
	Bmp[DIRKPLATE].Hoehe = (Bmp[DIRKPLATE].rcSrc.bottom - Bmp[DIRKPLATE].rcSrc.top);
	Bmp[DIRKPLATE].rcDes.left = MAXX/2-Bmp[DIRKPLATE].Breite/2;
	Bmp[DIRKPLATE].rcDes.top  = MAXY-Bmp[DIRKPLATE].Hoehe/2;
	Bmp[DIRKPLATE].rcDes.right= Bmp[DIRKPLATE].rcDes.left+Bmp[DIRKPLATE].Breite;
	Bmp[DIRKPLATE].rcDes.bottom=Bmp[DIRKPLATE].rcDes.top+Bmp[DIRKPLATE].Hoehe;
	Bmp[DIRKPLATE].Surface = lpDDSCredits;

	//MATTHIAS
	Bmp[MATTHIAS].Anzahl = 1;
	Bmp[MATTHIAS].rcSrc.left = 0;
	Bmp[MATTHIAS].rcSrc.top  = 96;
	Bmp[MATTHIAS].rcSrc.right= Bmp[MATTHIAS].rcSrc.left+379;
	Bmp[MATTHIAS].rcSrc.bottom=Bmp[MATTHIAS].rcSrc.top +47;
	Bmp[MATTHIAS].Breite = (Bmp[MATTHIAS].rcSrc.right - Bmp[MATTHIAS].rcSrc.left);
	Bmp[MATTHIAS].Hoehe = (Bmp[MATTHIAS].rcSrc.bottom - Bmp[MATTHIAS].rcSrc.top);
	Bmp[MATTHIAS].rcDes.left = MAXX/2-Bmp[MATTHIAS].Breite/2;
	Bmp[MATTHIAS].rcDes.top  = MAXY-Bmp[MATTHIAS].Hoehe/2;
	Bmp[MATTHIAS].rcDes.right= Bmp[MATTHIAS].rcDes.left+Bmp[MATTHIAS].Breite;
	Bmp[MATTHIAS].rcDes.bottom=Bmp[MATTHIAS].rcDes.top+Bmp[MATTHIAS].Hoehe;
	Bmp[MATTHIAS].Surface = lpDDSCredits;

	//TESTSPIELER
	Bmp[TESTSPIELER].Anzahl = 1;
	Bmp[TESTSPIELER].rcSrc.left = 0;
	Bmp[TESTSPIELER].rcSrc.top  = 143;
	Bmp[TESTSPIELER].rcSrc.right= Bmp[TESTSPIELER].rcSrc.left+210;
	Bmp[TESTSPIELER].rcSrc.bottom=Bmp[TESTSPIELER].rcSrc.top +55;
	Bmp[TESTSPIELER].Breite = (Bmp[TESTSPIELER].rcSrc.right - Bmp[TESTSPIELER].rcSrc.left);
	Bmp[TESTSPIELER].Hoehe = (Bmp[TESTSPIELER].rcSrc.bottom - Bmp[TESTSPIELER].rcSrc.top);
	Bmp[TESTSPIELER].rcDes.left = MAXX/2-Bmp[TESTSPIELER].Breite/2;
	Bmp[TESTSPIELER].rcDes.top  = MAXY-Bmp[TESTSPIELER].Hoehe/2;
	Bmp[TESTSPIELER].rcDes.right= Bmp[TESTSPIELER].rcDes.left+Bmp[TESTSPIELER].Breite;
	Bmp[TESTSPIELER].rcDes.bottom=Bmp[TESTSPIELER].rcDes.top+Bmp[TESTSPIELER].Hoehe;
	Bmp[TESTSPIELER].Surface = lpDDSCredits;

	//TOBIAS
	Bmp[TOBIAS].Anzahl = 1;
	Bmp[TOBIAS].rcSrc.left = 0;
	Bmp[TOBIAS].rcSrc.top  = 198;
	Bmp[TOBIAS].rcSrc.right= Bmp[TOBIAS].rcSrc.left+273;
	Bmp[TOBIAS].rcSrc.bottom=Bmp[TOBIAS].rcSrc.top +56;
	Bmp[TOBIAS].Breite = (Bmp[TOBIAS].rcSrc.right - Bmp[TOBIAS].rcSrc.left);
	Bmp[TOBIAS].Hoehe = (Bmp[TOBIAS].rcSrc.bottom - Bmp[TOBIAS].rcSrc.top);
	Bmp[TOBIAS].rcDes.left = MAXX/2-Bmp[TOBIAS].Breite/2;
	Bmp[TOBIAS].rcDes.top  = MAXY-Bmp[TOBIAS].Hoehe/2;
	Bmp[TOBIAS].rcDes.right= Bmp[TOBIAS].rcDes.left+Bmp[TOBIAS].Breite;
	Bmp[TOBIAS].rcDes.bottom=Bmp[TOBIAS].rcDes.top+Bmp[TOBIAS].Hoehe;
	Bmp[TOBIAS].Surface = lpDDSCredits;

	//SIGRID
	Bmp[SIGRID].Anzahl = 1;
	Bmp[SIGRID].rcSrc.left = 0;
	Bmp[SIGRID].rcSrc.top  = 254;
	Bmp[SIGRID].rcSrc.right= Bmp[SIGRID].rcSrc.left+226;
	Bmp[SIGRID].rcSrc.bottom=Bmp[SIGRID].rcSrc.top +56;
	Bmp[SIGRID].Breite = (Bmp[SIGRID].rcSrc.right - Bmp[SIGRID].rcSrc.left);
	Bmp[SIGRID].Hoehe = (Bmp[SIGRID].rcSrc.bottom - Bmp[SIGRID].rcSrc.top);
	Bmp[SIGRID].rcDes.left = MAXX/2-Bmp[SIGRID].Breite/2;
	Bmp[SIGRID].rcDes.top  = MAXY-Bmp[SIGRID].Hoehe/2;
	Bmp[SIGRID].rcDes.right= Bmp[SIGRID].rcDes.left+Bmp[SIGRID].Breite;
	Bmp[SIGRID].rcDes.bottom=Bmp[SIGRID].rcDes.top+Bmp[SIGRID].Hoehe;
	Bmp[SIGRID].Surface = lpDDSCredits;

	//PATHFINDING
	Bmp[PATHFINDING].Anzahl = 1;
	Bmp[PATHFINDING].rcSrc.left = 0;
	Bmp[PATHFINDING].rcSrc.top  = 353;
	Bmp[PATHFINDING].rcSrc.right= Bmp[PATHFINDING].rcSrc.left+233;
	Bmp[PATHFINDING].rcSrc.bottom=Bmp[PATHFINDING].rcSrc.top +59;
	Bmp[PATHFINDING].Breite = (Bmp[PATHFINDING].rcSrc.right - Bmp[PATHFINDING].rcSrc.left);
	Bmp[PATHFINDING].Hoehe = (Bmp[PATHFINDING].rcSrc.bottom - Bmp[PATHFINDING].rcSrc.top);
	Bmp[PATHFINDING].rcDes.left = MAXX/2-Bmp[PATHFINDING].Breite/2;
	Bmp[PATHFINDING].rcDes.top  = MAXY-Bmp[PATHFINDING].Hoehe/2;
	Bmp[PATHFINDING].rcDes.right= Bmp[PATHFINDING].rcDes.left+Bmp[PATHFINDING].Breite;
	Bmp[PATHFINDING].rcDes.bottom=Bmp[PATHFINDING].rcDes.top+Bmp[PATHFINDING].Hoehe;
	Bmp[PATHFINDING].Surface = lpDDSCredits;

	//JOHN
	Bmp[JOHN].Anzahl = 1;
	Bmp[JOHN].rcSrc.left = 0;
	Bmp[JOHN].rcSrc.top  = 412;
	Bmp[JOHN].rcSrc.right= Bmp[JOHN].rcSrc.left+347;
	Bmp[JOHN].rcSrc.bottom=Bmp[JOHN].rcSrc.top +56;
	Bmp[JOHN].Breite = (Bmp[JOHN].rcSrc.right - Bmp[JOHN].rcSrc.left);
	Bmp[JOHN].Hoehe = (Bmp[JOHN].rcSrc.bottom - Bmp[JOHN].rcSrc.top);
	Bmp[JOHN].rcDes.left = MAXX/2-Bmp[JOHN].Breite/2;
	Bmp[JOHN].rcDes.top  = MAXY-Bmp[JOHN].Hoehe/2;
	Bmp[JOHN].rcDes.right= Bmp[JOHN].rcDes.left+Bmp[JOHN].Breite;
	Bmp[JOHN].rcDes.bottom=Bmp[JOHN].rcDes.top+Bmp[JOHN].Hoehe;
	Bmp[JOHN].Surface = lpDDSCredits;

	//HEIKO
	Bmp[HEIKO].Anzahl = 1;
	Bmp[HEIKO].rcSrc.left = 0;
	Bmp[HEIKO].rcSrc.top  = 468;
	Bmp[HEIKO].rcSrc.right= Bmp[HEIKO].rcSrc.left+236;
	Bmp[HEIKO].rcSrc.bottom=Bmp[HEIKO].rcSrc.top +47;
	Bmp[HEIKO].Breite = (Bmp[HEIKO].rcSrc.right - Bmp[HEIKO].rcSrc.left);
	Bmp[HEIKO].Hoehe = (Bmp[HEIKO].rcSrc.bottom - Bmp[HEIKO].rcSrc.top);
	Bmp[HEIKO].rcDes.left = MAXX/2-Bmp[HEIKO].Breite/2;
	Bmp[HEIKO].rcDes.top  = MAXY-Bmp[HEIKO].Hoehe/2;
	Bmp[HEIKO].rcDes.right= Bmp[HEIKO].rcDes.left+Bmp[HEIKO].Breite;
	Bmp[HEIKO].rcDes.bottom=Bmp[HEIKO].rcDes.top+Bmp[HEIKO].Hoehe;
	Bmp[HEIKO].Surface = lpDDSCredits;

	//GISELA
	Bmp[GISELA].Anzahl = 1;
	Bmp[GISELA].rcSrc.left = 0;
	Bmp[GISELA].rcSrc.top  = 515;
	Bmp[GISELA].rcSrc.right= Bmp[GISELA].rcSrc.left+232;
	Bmp[GISELA].rcSrc.bottom=Bmp[GISELA].rcSrc.top +47;
	Bmp[GISELA].Breite = (Bmp[GISELA].rcSrc.right - Bmp[GISELA].rcSrc.left);
	Bmp[GISELA].Hoehe = (Bmp[GISELA].rcSrc.bottom - Bmp[GISELA].rcSrc.top);
	Bmp[GISELA].rcDes.left = MAXX/2-Bmp[GISELA].Breite/2;
	Bmp[GISELA].rcDes.top  = MAXY-Bmp[GISELA].Hoehe/2;
	Bmp[GISELA].rcDes.right= Bmp[GISELA].rcDes.left+Bmp[GISELA].Breite;
	Bmp[GISELA].rcDes.bottom=Bmp[GISELA].rcDes.top+Bmp[GISELA].Hoehe;
	Bmp[GISELA].Surface = lpDDSCredits;

	//WEITEREHILFE
	Bmp[WEITEREHILFE].Anzahl = 1;
	Bmp[WEITEREHILFE].rcSrc.left = 0;
	Bmp[WEITEREHILFE].rcSrc.top  = 562;
	Bmp[WEITEREHILFE].rcSrc.right= Bmp[WEITEREHILFE].rcSrc.left+258;
	Bmp[WEITEREHILFE].rcSrc.bottom=Bmp[WEITEREHILFE].rcSrc.top +46;
	Bmp[WEITEREHILFE].Breite = (Bmp[WEITEREHILFE].rcSrc.right - Bmp[WEITEREHILFE].rcSrc.left);
	Bmp[WEITEREHILFE].Hoehe = (Bmp[WEITEREHILFE].rcSrc.bottom - Bmp[WEITEREHILFE].rcSrc.top);
	Bmp[WEITEREHILFE].rcDes.left = MAXX/2-Bmp[WEITEREHILFE].Breite/2;
	Bmp[WEITEREHILFE].rcDes.top  = MAXY-Bmp[WEITEREHILFE].Hoehe/2;
	Bmp[WEITEREHILFE].rcDes.right= Bmp[WEITEREHILFE].rcDes.left+Bmp[WEITEREHILFE].Breite;
	Bmp[WEITEREHILFE].rcDes.bottom=Bmp[WEITEREHILFE].rcDes.top+Bmp[WEITEREHILFE].Hoehe;
	Bmp[WEITEREHILFE].Surface = lpDDSCredits;

	//DPSOFTWARE
	Bmp[DPSOFTWARE].Anzahl = 1;
	Bmp[DPSOFTWARE].rcSrc.left = 0;
	Bmp[DPSOFTWARE].rcSrc.top  = 608;
	Bmp[DPSOFTWARE].rcSrc.right= Bmp[DPSOFTWARE].rcSrc.left+291;
	Bmp[DPSOFTWARE].rcSrc.bottom=Bmp[DPSOFTWARE].rcSrc.top +99;
	Bmp[DPSOFTWARE].Breite = (Bmp[DPSOFTWARE].rcSrc.right - Bmp[DPSOFTWARE].rcSrc.left);
	Bmp[DPSOFTWARE].Hoehe = (Bmp[DPSOFTWARE].rcSrc.bottom - Bmp[DPSOFTWARE].rcSrc.top);
	Bmp[DPSOFTWARE].rcDes.left = MAXX/2-Bmp[DPSOFTWARE].Breite/2;
	Bmp[DPSOFTWARE].rcDes.top  = MAXY-Bmp[DPSOFTWARE].Hoehe/2;
	Bmp[DPSOFTWARE].rcDes.right= Bmp[DPSOFTWARE].rcDes.left+Bmp[DPSOFTWARE].Breite;
	Bmp[DPSOFTWARE].rcDes.bottom=Bmp[DPSOFTWARE].rcDes.top+Bmp[DPSOFTWARE].Hoehe;
	Bmp[DPSOFTWARE].Surface = lpDDSCredits;

	//SCHWARZ
	Bmp[SCHWARZ].Anzahl = 1;
	Bmp[SCHWARZ].rcSrc.left = 0;
	Bmp[SCHWARZ].rcSrc.top  = 608;
	Bmp[SCHWARZ].rcSrc.right= Bmp[SCHWARZ].rcSrc.left+1;
	Bmp[SCHWARZ].rcSrc.bottom=Bmp[SCHWARZ].rcSrc.top +1;
	Bmp[SCHWARZ].Breite = (Bmp[SCHWARZ].rcSrc.right - Bmp[SCHWARZ].rcSrc.left);
	Bmp[SCHWARZ].Hoehe = (Bmp[SCHWARZ].rcSrc.bottom - Bmp[SCHWARZ].rcSrc.top);
	Bmp[SCHWARZ].rcDes.left = MAXX/2-Bmp[SCHWARZ].Breite/2;
	Bmp[SCHWARZ].rcDes.top  = MAXY-Bmp[SCHWARZ].Hoehe/2;
	Bmp[SCHWARZ].rcDes.right= Bmp[SCHWARZ].rcDes.left+Bmp[SCHWARZ].Breite;
	Bmp[SCHWARZ].rcDes.bottom=Bmp[SCHWARZ].rcDes.top+Bmp[SCHWARZ].Hoehe;
	Bmp[SCHWARZ].Surface = lpDDSCredits;

	//SOUNDS
	Bmp[SOUNDS].Anzahl = 1;
	Bmp[SOUNDS].rcSrc.left = 0;
	Bmp[SOUNDS].rcSrc.top  = 310;
	Bmp[SOUNDS].rcSrc.right= Bmp[SOUNDS].rcSrc.left+144;
	Bmp[SOUNDS].rcSrc.bottom=Bmp[SOUNDS].rcSrc.top +43;
	Bmp[SOUNDS].Breite = (Bmp[SOUNDS].rcSrc.right - Bmp[SOUNDS].rcSrc.left);
	Bmp[SOUNDS].Hoehe = (Bmp[SOUNDS].rcSrc.bottom - Bmp[SOUNDS].rcSrc.top);
	Bmp[SOUNDS].rcDes.left = MAXX/2-Bmp[SOUNDS].Breite/2;
	Bmp[SOUNDS].rcDes.top  = MAXY-Bmp[SOUNDS].Hoehe/2;
	Bmp[SOUNDS].rcDes.right= Bmp[SOUNDS].rcDes.left+Bmp[SOUNDS].Breite;
	Bmp[SOUNDS].rcDes.bottom=Bmp[SOUNDS].rcDes.top+Bmp[SOUNDS].Hoehe;
	Bmp[SOUNDS].Surface = lpDDSCredits;

	//MUSIK
	Bmp[MUSIK].Anzahl = 1;
	Bmp[MUSIK].rcSrc.left = 160;
	Bmp[MUSIK].rcSrc.top  = 310;
	Bmp[MUSIK].rcSrc.right= Bmp[MUSIK].rcSrc.left+124;
	Bmp[MUSIK].rcSrc.bottom=Bmp[MUSIK].rcSrc.top +39;
	Bmp[MUSIK].Breite = (Bmp[MUSIK].rcSrc.right - Bmp[MUSIK].rcSrc.left);
	Bmp[MUSIK].Hoehe = (Bmp[MUSIK].rcSrc.bottom - Bmp[MUSIK].rcSrc.top);
	Bmp[MUSIK].rcDes.left = MAXX/2-Bmp[MUSIK].Breite/2;
	Bmp[MUSIK].rcDes.top  = MAXY-Bmp[MUSIK].Hoehe/2;
	Bmp[MUSIK].rcDes.right= Bmp[MUSIK].rcDes.left+Bmp[MUSIK].Breite;
	Bmp[MUSIK].rcDes.bottom=Bmp[MUSIK].rcDes.top+Bmp[MUSIK].Hoehe;
	Bmp[MUSIK].Surface = lpDDSCredits;

	for (let i=0; i<10; i++) {
		for (let k=0; k<10; k++) {
			AbspannListe[i][k].Aktiv = false;
			AbspannListe[i][k].Bild = -1;
		}
	}
	AbspannListe[0][0].Bild = PROGRAMMIERUNG;
	AbspannListe[0][1].Aktiv = true; //nur den hier true setzen, l�st dann alles andere aus
	AbspannListe[0][1].Bild = DIRKPLATE;
	AbspannListe[1][0].Bild = MUSIK;
	AbspannListe[1][1].Bild = HEIKO;
	AbspannListe[2][0].Bild = SOUNDS;
	AbspannListe[2][1].Bild = DIRKPLATE;
	AbspannListe[3][0].Bild = TESTSPIELER;
	AbspannListe[3][1].Bild = MATTHIAS;
	AbspannListe[3][2].Bild = TOBIAS;
	AbspannListe[3][3].Bild = SIGRID;
	AbspannListe[4][0].Bild = PATHFINDING;
	AbspannListe[4][1].Bild = JOHN;
	AbspannListe[5][0].Bild = WEITEREHILFE;
	AbspannListe[5][1].Bild = HEIKO;
	AbspannListe[5][2].Bild = GISELA;
	AbspannListe[6][0].Bild = SCHWARZ;
	AbspannListe[6][1].Bild = DPSOFTWARE;

	//Sounds
	for(let i=0; i<WAVANZ; i++) {
		Wav[i].Dateiname = "sfx/click1.ogg";
		Wav[i].Loop		 = false;
		Wav[i].Volume    = 100;
	}

	Wav[WAVSTURM].Dateiname = "sfx/storm.ogg";
	Wav[WAVSTURM].Volume	= 85;
		
	Wav[WAVSCHWIMMEN].Dateiname = "sfx/swim.ogg";
	Wav[WAVSCHWIMMEN].Volume	= 90;

	Wav[WAVPLATSCH].Dateiname = "sfx/splash.ogg";
	Wav[WAVPLATSCH].Volume	= 95;

	Wav[WAVFAELLEN].Dateiname = "sfx/log.ogg";
	Wav[WAVFAELLEN].Volume	= 100;
		
	Wav[WAVSCHLAGEN].Dateiname = "sfx/beat.ogg";
	Wav[WAVSCHLAGEN].Volume	= 100;

	Wav[WAVSCHLEUDER].Dateiname = "sfx/slingshot.ogg";
	Wav[WAVSCHLEUDER].Volume	= 100;

	Wav[WAVSCHAUFELN].Dateiname = "sfx/shovel.ogg";
	Wav[WAVSCHAUFELN].Volume	= 90;

	Wav[WAVHAMMER].Dateiname = "sfx/hammer.ogg";
	Wav[WAVHAMMER].Volume	= 100;

	Wav[WAVCRASH].Dateiname = "sfx/crash.ogg";
	Wav[WAVCRASH].Volume	= 100;

	Wav[WAVSCHNARCHEN].Dateiname = "sfx/snore.ogg";
	Wav[WAVSCHNARCHEN].Volume	= 90;

	Wav[WAVTRINKEN].Dateiname = "sfx/drink.ogg";
	Wav[WAVTRINKEN].Volume	= 95;

	Wav[WAVKNISTERN].Dateiname = "sfx/rustle.ogg";
	Wav[WAVKNISTERN].Volume	= 90;

	Wav[WAVANGEL].Dateiname = "sfx/fishingrod.ogg";
	Wav[WAVANGEL].Volume	= 100;

	Wav[WAVWALD].Dateiname = "sfx/forest.ogg";
	Wav[WAVWALD].Volume	= 90;

	Wav[WAVFEUER].Dateiname = "sfx/fire.ogg";
	Wav[WAVFEUER].Volume	= 100;

	Wav[WAVBRANDUNG].Dateiname = "sfx/shore.ogg";
	Wav[WAVBRANDUNG].Volume	= 100;

	Wav[WAVBAUMFAELLT].Dateiname = "sfx/treefall.ogg";
	Wav[WAVBAUMFAELLT].Volume	= 100;

	Wav[WAVFLUSS].Dateiname = "sfx/stream.ogg";
	Wav[WAVFLUSS].Volume	= 85;

	Wav[WAVKLICK].Dateiname = "sfx/click1.ogg";
	Wav[WAVKLICK].Volume	= 95;

	Wav[WAVKLICK2].Dateiname = "sfx/click2.ogg";
	Wav[WAVKLICK2].Volume	= 95;

	Wav[WAVABSPANN].Dateiname = "sfx/outro.ogg";
	Wav[WAVABSPANN].Volume	= 100;
	Wav[WAVABSPANN].Loop	= true;

	Wav[WAVLOGO].Dateiname = "sfx/mainscreen.ogg";
	Wav[WAVLOGO].Volume	= 100;
	Wav[WAVLOGO].Loop	= true;

	Wav[WAVWOLF].Dateiname = "sfx/wolve.ogg";
	Wav[WAVWOLF].Volume	= 90;

	Wav[WAVERFINDUNG].Dateiname = "sfx/invention.ogg";
	Wav[WAVERFINDUNG].Volume	= 95;

	//Testweise alle Sounds gleich in den Speicher laden
	for(let i=1; i<WAVANZ; i++) LoadSound(i);

	//Textausgabe
	TextBereich[TXTTEXTFELD].Aktiv = false;
	TextBereich[TXTTEXTFELD].rcText.left  = 9;
	TextBereich[TXTTEXTFELD].rcText.top	= MAXY-17;
	TextBereich[TXTTEXTFELD].rcText.right = MAXX-200;
	TextBereich[TXTTEXTFELD].rcText.bottom= MAXY-2;

	TextBereich[TXTFPS].Aktiv = false;
	TextBereich[TXTFPS].rcText.left  = MAXX-40;
	TextBereich[TXTFPS].rcText.top   = 3;
	TextBereich[TXTFPS].rcText.right = TextBereich[TXTFPS].rcText.left+2*S1XPIXEL;
	TextBereich[TXTFPS].rcText.bottom= TextBereich[TXTFPS].rcText.top +  S1YPIXEL;

	TextBereich[TXTTAGESZEIT].Aktiv = true;
	TextBereich[TXTTAGESZEIT].rcText.left  = MAXX-110;
	TextBereich[TXTTAGESZEIT].rcText.top	= MAXY-20;
	TextBereich[TXTTAGESZEIT].rcText.right = TextBereich[TXTTAGESZEIT].rcText.left+5*S2XPIXEL;
	TextBereich[TXTTAGESZEIT].rcText.bottom= TextBereich[TXTTAGESZEIT].rcText.top +  S2YPIXEL;

	TextBereich[TXTPAPIER].Aktiv = false;
	TextBereich[TXTPAPIER].rcText.left  = 150;
	TextBereich[TXTPAPIER].rcText.top	  = 100;
	TextBereich[TXTPAPIER].rcText.right = 530;
	TextBereich[TXTPAPIER].rcText.bottom= 500;

	TextBereich[TXTCHANCE].Aktiv = false;
	TextBereich[TXTCHANCE].rcText.left  = Bmp[RING].rcDes.left+5;
	TextBereich[TXTCHANCE].rcText.top	= Bmp[RING].rcDes.top+Bmp[RING].Hoehe+10;
	TextBereich[TXTCHANCE].rcText.right = TextBereich[TXTCHANCE].rcText.left+3*S2XPIXEL;
	TextBereich[TXTCHANCE].rcText.bottom= TextBereich[TXTCHANCE].rcText.top +  S2YPIXEL;

	Guy.Resource[WASSER] = 100;
	Guy.Resource[NAHRUNG]= 100;
	Guy.Resource[GESUNDHEIT] = 100;
	
	for (let i=ROHAST; i<=ROHSCHLEUDER; i++) {
		Guy.Inventar[i]   = 0;
	}

	CursorTyp = CUPFEIL;
	Gitter = false;
	MouseAktiv = true;
	PapierText = -1;
	HauptMenue = 0;
	TwoClicks = -1; 
	Nacht	= false;
	Frage = -1;
	LastBild = 100;
	Bild = 0;
	Zeit = Date.now() / 1000;
	Spielbeenden = false;
	MousePosition.x = MAXX /2;
	MousePosition.y = MAXY /2;
	Button0down = false;
	Button1down = false;
	SchatzPos.x = -1;
	SchatzPos.y = -1;
	SchatzGef	= false;
}

function Blitten(lpDDSVon, lpDDSNach, Transp)
{
	lpDDSNach.ctx.drawImage(
		lpDDSVon,
		rcRectsrc.left,
		rcRectsrc.top,
		rcRectsrc.right - rcRectsrc.left,
		rcRectsrc.bottom - rcRectsrc.top,
		rcRectdes.left,
		rcRectdes.top,
		rcRectdes.right - rcRectdes.left,
		rcRectdes.bottom - rcRectdes.top
	);
}

function CheckMouse()
{
	let	dims; //Da werden die Daten der Maus gespeichert
	let			Button; //Welcher Knopf ist gedrückt worden
	let			Push;	//Knopf gedrückt(1) oder losgelassen(-1) oder gedrückt(0) gehalten
	let			xDiff,yDiff; //Die Differenz zur vorherigen Position ((Für Scrollen)

	g_pMouse->GetDeviceState(sizeof(DIMOUSESTATE), &dims);
	//Mausbewegung
	xDiff = MousePosition.x;
	MousePosition.x += (short) dims.lX;
	xDiff -= MousePosition.x;
	if (MousePosition.x < 0) MousePosition.x = 0;
	if (MousePosition.x > MAXX-2) MousePosition.x = MAXX-2;
	yDiff =	MousePosition.y;
	MousePosition.y += (short) dims.lY;
    yDiff -= MousePosition.y;
	if (MousePosition.y < 0) MousePosition.y = 0;
	if (MousePosition.y > MAXY-2) MousePosition.y = MAXY-2;
	
	if (TwoClicks == -1) 
	{
		if (Guy.Aktiv)	
		{
			if (InRect(MousePosition.x,MousePosition.y,Bmp[BUTTSTOP].rcDes) && 
				(Bmp[BUTTSTOP].Phase!=-1)) CursorTyp = CUPFEIL;
			else CursorTyp = CUUHR; 
		}
		else CursorTyp = CUPFEIL;
	}
	Button = -1;
		
	if (dims.rgbButtons[0] & 0x80)
	{
		Button = 0;
		if (Button0down) Push = 0;
		else
		{
			Push = 1;
			Button0down = true;
		}
	}
	else
	{ 
		if (Button0down)
		{
			Button = 0;
			Push = -1;
			Button0down = false;
		}
	} 

	
	if (dims.rgbButtons[1] & 0x80)
	{	
		Button = 1;
		if (Button1down) Push = 0;
		else
		{
			Push = 1;
			Button1down = true;
		}
	}
	else
	{ 	
		if (Button1down)
		{
			Button = 1;
			Push = -1;
			Button1down = false;
		}
	} 
	
	//Wenn ein Text steht, dann bei Mausdruck Text weg 
	if (PapierText != -1)
	{
		if (Frage == 0)
		{
			if (InRect(MousePosition.x,MousePosition.y,Bmp[JA].rcDes))
			{
				CursorTyp = CUPFEIL;
				if ((Button == 0) && (Push == 1))
				{
					Frage = 1;
					Textloeschen(TXTPAPIER);
					PapierText = -1;
					Guy.Aktiv = false;
					PlaySound(WAVKLICK2,100);
				}
			}
			else if (InRect(MousePosition.x,MousePosition.y,Bmp[NEIN].rcDes))
			{
				CursorTyp = CUPFEIL;
				if ((Button == 0) && (Push == 1))
				{
					Frage = 2;
					Textloeschen(TXTPAPIER);
					PapierText = -1;
					Guy.Aktiv = false;
					PlaySound(WAVKLICK2,100);
				}
			}
			else if ((Button == 0) && (Push == 1)) PlaySound(WAVKLICK,100);
		}
		else if ((Button != -1) && (Push == 1))
		{
			Textloeschen(TXTPAPIER);
			PapierText = -1;
			Guy.Aktiv = false;
		}
		return;
		
	}
	
	//Animationen und Text l�schen (werden dann von den MouseIn.. Sachen neu angestellt
	Textloeschen(TXTTEXTFELD);
	ButtAniAus();
	
	//Wenn der Guy aktiv dann linke Mouse-Buttons ignorieren
	if ((Guy.Aktiv) && (Button == 0)) 
	{
		if ((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTSTOP].rcDes)) && 
				(Bmp[BUTTSTOP].Phase!=-1)) ;
		else Button = -1;
	} 
	
	//die Maus ist in der Spielflaeche ->
	if (InRect(MousePosition.x,MousePosition.y,rcSpielflaeche))	
		MouseInSpielflaeche(Button,Push,xDiff,yDiff);
	//die Maus ist im Panel ->
	if (InRect(MousePosition.x,MousePosition.y,rcPanel))	
		MouseInPanel(Button,Push);	
	/*dims.lX, dims.lY, dims.lZ,
                     (dims.rgbButtons[0] & 0x80) ? '0' : ' ',
                     (dims.rgbButtons[1] & 0x80) ? '1' : ' ',
                     (dims.rgbButtons[2] & 0x80) ? '2' : ' ',
                     (dims.rgbButtons[3] & 0x80) ? '3' : ' ');*/
}

short CheckKey() 
{ 
    #define KEYDOWN(name,key) (name[key] & 0x80) 
    char     buffer[256]; 
    short	 x; 
	
    g_pKey->GetDeviceState(sizeof(buffer),(LPVOID)&buffer); 
   
	
	if (Spielzustand == SZLOGO)
	{
		if ((KEYDOWN(buffer, DIK_ESCAPE)) || (KEYDOWN(buffer, DIK_RETURN)) ||
			(KEYDOWN(buffer, DIK_SPACE))) //Logo Abbrechen
		{
			StopSound(WAVLOGO);
			NeuesSpiel(false);
			return(2);
		}
	}
	else if (Spielzustand == SZINTRO)
	{
		if ((KEYDOWN(buffer, DIK_ESCAPE)) || (KEYDOWN(buffer, DIK_RETURN)) ||
			(KEYDOWN(buffer, DIK_SPACE)))//Intro Abbrechen
		{
			StopSound(WAVSTURM); //Sound hier sofort stoppen
			StopSound(WAVSCHWIMMEN); //Sound hier sofort stoppen
			Guy.Aktiv = false;
			for (x=Guy.Pos.x;x<MAXXKACH;x++)
			{
				Guy.Pos.x = x;
				Entdecken();
				if (Scape[Guy.Pos.x][Guy.Pos.y].Art != 1) break;
			}
			Scape[Guy.Pos.x-2][Guy.Pos.y].Objekt = WRACK;
			Scape[Guy.Pos.x-2][Guy.Pos.y].ObPos.x = (short)Bmp[WRACK].rcDes.left;
			Scape[Guy.Pos.x-2][Guy.Pos.y].ObPos.y = (short)Bmp[WRACK].rcDes.top;

			Guy.PosScreen.x =   
				(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].x +
				 Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].x) /2;
			Guy.PosScreen.y =   
				(Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].y +
				 Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].y) /2;
			RouteStart.x = -1;
			RouteStart.y = -1;
			RouteZiel.x = -1;
			RouteZiel.y = -1;
			Camera.x = Guy.PosScreen.x-rcSpielflaeche.right/2;
			Camera.y = Guy.PosScreen.y-rcSpielflaeche.bottom/2;
			if (BootsFahrt) ChangeBootsFahrt();
			Guy.Zustand = GUYLINKS;
			Guy.Aktion = AKNICHTS;
			Spielzustand = SZSPIEL;
			Guy.PosAlt = Guy.PosScreen;
			SaveGame();
			return(1);
		}
	}
	else if (Spielzustand == SZGERETTET)
	{
		if ((KEYDOWN(buffer, DIK_ESCAPE)) || (KEYDOWN(buffer, DIK_RETURN)) ||
			(KEYDOWN(buffer, DIK_SPACE))) 
		{
			Spielzustand = SZABSPANN;
			return(1);
		}
	}
	else if (Spielzustand == SZSPIEL)
	{
		if (KEYDOWN(buffer, DIK_RIGHT)) Camera.x += 10;
		if (KEYDOWN(buffer, DIK_LEFT))  Camera.x -= 10;
		if (KEYDOWN(buffer, DIK_DOWN))	Camera.y += 10;
		if (KEYDOWN(buffer, DIK_UP))    Camera.y -= 10;
		if (KEYDOWN(buffer, DIK_ESCAPE))
		{
			Guy.AkNummer = 0;
			Guy.Aktiv = false;
			Guy.Aktion = AKSPIELVERLASSEN;
		}
		if (KEYDOWN(buffer, DIK_F11))
		{
			Guy.AkNummer = 0;
			Guy.Aktiv = false;
			Guy.Aktion = AKNEUBEGINNEN;
		}
		if (KEYDOWN(buffer, DIK_G))	
		{
			Gitter = !Gitter;
			Generate();
		}
		if (KEYDOWN(buffer, DIK_A))	
		{
			LAnimation = !LAnimation;
			Generate();
		}
		
		/*if (KEYDOWN(buffer, DIK_C))	//Zum testen
		{
			short x,y;
			for (y=0;y<MAXYKACH;y++)
				for (x=0;x<MAXXKACH;x++)
					Scape[x][y].Entdeckt = true;
				Generate();
		}
		
		if (KEYDOWN(buffer, DIK_I))	//Zum testen
		{
			Guy.Inventar[ROHAST] = 10;
			Guy.Inventar[ROHSTEIN] = 10;
			Guy.Inventar[ROHBLATT] = 10;
			Guy.Inventar[ROHLIANE] = 10;
			Guy.Inventar[ROHSTAMM] = 9;
		}
		if (KEYDOWN(buffer, DIK_W))	//Zum testen
		{
			Guy.Inventar[ROHAXT]   = 1;
			Guy.Inventar[ROHEGGE]  = 1;
			Guy.Inventar[ROHANGEL]  = 1;
			Guy.Inventar[ROHHAMMER]   = 1;
			Guy.Inventar[ROHFERNROHR] = 1; 
			Guy.Inventar[ROHSTREICHHOLZ] = 1; 
			Guy.Inventar[ROHSCHAUFEL] = 1; 
			Guy.Inventar[ROHKARTE] = 1; 
			Guy.Inventar[ROHSCHLEUDER] = 1; 

			Bmp[BUTTFAELLEN].Phase  = 0;
			Bmp[BUTTANGELN].Phase  = 0;
			Bmp[BUTTANZUENDEN].Phase  = 0;
			Bmp[BUTTAUSSCHAU].Phase = 0;
			Bmp[BUTTSCHATZKARTE].Phase = 0;
			Bmp[BUTTSCHATZ].Phase = 0;
			Bmp[BUTTSCHLEUDER].Phase = 0;
			Bmp[BUTTFELD].Phase  = 0; 
			Bmp[BUTTBOOT].Phase  = 0; 
			Bmp[BUTTROHR].Phase  = 0; 
			Bmp[BUTTHAUS1].Phase = 0;
			Bmp[BUTTHAUS2].Phase = 0;
			Bmp[BUTTHAUS3].Phase = 0;
		}*/
		
		if (KEYDOWN(buffer, DIK_S))	//Sound ausschalten
		{
			if (Soundzustand == 0) Soundzustand = 1;
			else if (Soundzustand == 1) Soundzustand = 0; 
		}
	}
	else if (Spielzustand == SZABSPANN)
	{
		if ((KEYDOWN(buffer, DIK_ESCAPE)) || (KEYDOWN(buffer, DIK_RETURN)) ||
			(KEYDOWN(buffer, DIK_SPACE)))
		{
			StopSound(WAVABSPANN);
			return(0);
		}
	}
	return(1);
} 
 
void AddTime(short h,short m)
{
	short x,y,i;

	Stunden += h;
	Minuten += m;
	if (Minuten >= 60) 
	{
		Minuten -= 60;
		Stunden++;
	}
	for (y=0;y<MAXYKACH;y++)
		for (x=0;x<MAXXKACH;x++) 
		{
			//Feuer nach einer bestimmten Zeit ausgehen lassen
			if (Scape[x][y].Objekt == FEUER) 
			{
				Scape[x][y].Timer += float((60*h+m)*0.0005);
				if (Scape[x][y].Timer >= 1)
				{
					Scape[x][y].Objekt   =-1;
					Scape[x][y].Timer    = 0;
					Scape[x][y].ObPos.x	 = 0;
					Scape[x][y].ObPos.y	 = 0;
					Scape[x][y].Phase    =-1;
					Chance -= 2+2*Scape[x][y].Hoehe;
				}
			}
			if ((Scape[x][y].Phase == -1) || 
				((Scape[x][y].Objekt != FELD) &&
				(Scape[x][y].Objekt != BUSCH))) continue; //Wenn kein Fruchtobjekt weiter
			if (Scape[x][y].Phase >= Bmp[Scape[x][y].Objekt].Anzahl) continue;
			if (Scape[x][y].Objekt == FELD) Scape[x][y].Phase += float((60*h+m)*0.005);
			else if (Scape[x][y].Objekt == BUSCH) Scape[x][y].Phase += float((60*h+m)*0.0005); //pro Minute Reifungsprozess fortf�hren
			if (Scape[x][y].Phase > Bmp[Scape[x][y].Objekt].Anzahl-1) 
				Scape[x][y].Phase = (float)Bmp[Scape[x][y].Objekt].Anzahl-1;
		}
	AddResource(GESUNDHEIT, (60*h+m)*(Guy.Resource[WASSER]-50+Guy.Resource[NAHRUNG]-50)/1000);
	
	if ((Spielzustand == SZSPIEL) && (!BootsFahrt))
	{
		for (i=0;i<=(60*h+m);i++)
		{
			if (Chance == 0) break;
			if (rand()%((int)(1/(Chance/72000))) == 1)
			{
				Guy.Aktiv = false;
				Guy.AkNummer = 0;
				Guy.Aktion = AKGERETTET;
				break;
			}
		}
	}

	
}

void AddResource(short Art, float Anzahl) //F�gt wassser usw hinzu
{
	Guy.Resource[Art] += Anzahl;
	if (Guy.Resource[Art] > 100) Guy.Resource[Art] = 100;
	if (Guy.Resource[Art] < 0)	 Guy.Resource[Art] = 0;
	//Wann tod
	if ((Guy.Resource[GESUNDHEIT] <= 0) && (Guy.Aktion != AKTOD) &&
		(Guy.Aktion != AKTAGENDE) && (Spielzustand == SZSPIEL))
	{
		Guy.Aktiv = false;
		Guy.AkNummer = 0;
		Guy.Aktion = AKTOD;
	}
}
void LimitScroll()
{
	if (Camera.x < ScapeGrenze.left) 
		Camera.x = (short)ScapeGrenze.left;
	if (Camera.x+rcSpielflaeche.right > ScapeGrenze.right) 
		Camera.x = (short)ScapeGrenze.right-(short)rcSpielflaeche.right;
	if (Camera.y < ScapeGrenze.top) 
		Camera.y = (short)ScapeGrenze.top;
	if (Camera.y+rcSpielflaeche.bottom > ScapeGrenze.bottom) 
		Camera.y = (short)ScapeGrenze.bottom-(short)rcSpielflaeche.bottom;
}

ZWEID GetKachel(short PosX,short PosY)
{
	short				x,y;
	ZWEID				Erg;

	for (y=0;y<MAXYKACH;y++)
		for (x=0;x<MAXXKACH;x++)
	{		//Die in Betracht kommenden Kacheln rausfinden
			if ((PosX >	Scape[x][y].xScreen) && (PosX < Scape[x][y].xScreen+KXPIXEL) &&
				(PosY > Scape[x][y].yScreen) && (PosY < Scape[x][y].yScreen+KYPIXEL))
			{
				
				if ((InDreieck(PosX,PosY,
							Scape[x][y].xScreen+EckKoor[Scape[x][y].Typ][0].x,
							Scape[x][y].yScreen+EckKoor[Scape[x][y].Typ][0].y,
							Scape[x][y].xScreen+EckKoor[Scape[x][y].Typ][1].x,
							Scape[x][y].yScreen+EckKoor[Scape[x][y].Typ][1].y,
							Scape[x][y].xScreen+EckKoor[Scape[x][y].Typ][3].x,
							Scape[x][y].yScreen+EckKoor[Scape[x][y].Typ][3].y)) ||
					(InDreieck(PosX,PosY,
							Scape[x][y].xScreen+EckKoor[Scape[x][y].Typ][2].x,
							Scape[x][y].yScreen+EckKoor[Scape[x][y].Typ][2].y,
							Scape[x][y].xScreen+EckKoor[Scape[x][y].Typ][1].x,
							Scape[x][y].yScreen+EckKoor[Scape[x][y].Typ][1].y,
							Scape[x][y].xScreen+EckKoor[Scape[x][y].Typ][3].x,
							Scape[x][y].yScreen+EckKoor[Scape[x][y].Typ][3].y)))
				{
					Erg.x = x;
					Erg.y = y;
					return Erg;
				}
			}
	}
	Erg.x = -1;
	Erg.y = -1;
	return Erg;
}

void MakeRohString(short x, short y, short Objekt)
{
	char TmpString[1024];
	bool  keinRohstoff; 
	short i;

	RohString[0] = char(0);
	keinRohstoff = true;
	if (Objekt == -1)
	{
	  for (i=0;i<BILDANZ;i++)
	  {
	    if (Scape[x][y].Rohstoff[i] != 0) keinRohstoff = false;
	  }
	}	
	else 
	{ 
	  for (i=0;i<BILDANZ;i++)
	  {
		if (Bmp[Objekt].Rohstoff[i] != 0) keinRohstoff = false;
	  }
	}
	if (keinRohstoff) return;
	strcat(RohString, " ->");
	for (i=0;i<BILDANZ;i++)
	{
		if (Objekt == -1){ if (Scape[x][y].Rohstoff[i] == 0) continue;}
		else { if (Bmp[Objekt].Rohstoff[i] == 0) continue;}
		strcat(RohString, " ");
		switch(i)
		{
		case ROHAST: LoadString(g_hInst,AST,TmpString,1024); break;
		case ROHSTEIN: LoadString(g_hInst,STEIN,TmpString,1024); break;	
		case ROHBLATT: LoadString(g_hInst,BLATT,TmpString,1024);  break;
		case ROHLIANE: LoadString(g_hInst,LIANE,TmpString,1024);  break;
		case ROHSTAMM: LoadString(g_hInst,STAMM,TmpString,1024);  break;
		}
		strcat(RohString, TmpString);
		strcat(RohString, "=");
		if (Objekt == -1) sprintf(TmpString, "%d", Scape[x][y].Rohstoff[i]);
		else sprintf(TmpString, "%d", Bmp[Objekt].Rohstoff[i]);
		strcat(RohString, TmpString);
	}
}

void MouseInSpielflaeche(short Button, short Push, short xDiff, short yDiff)
{
	ZWEID			Erg; //Die angeklickte Kachel
	char			Text[1024],TextTmp[1024]; //Text f�r Infoleiste
	
	//Info anzeigen
	Erg = GetKachel((MousePosition.x+Camera.x),(MousePosition.y+Camera.y)); 
	if (Scape[Erg.x][Erg.y].Entdeckt) 
	{
		LoadString(g_hInst,45+Scape[Erg.x][Erg.y].Art,Text,1024); 
		if ((Scape[Erg.x][Erg.y].Objekt != -1) && (Scape[Erg.x][Erg.y].Objekt != MEERWELLEN)) 
		{
			LoadString(g_hInst,MIT,TextTmp,1024); 
			strcat(Text, " ");
			strcat(Text, TextTmp);
			strcat(Text, " ");
			
			if ((Scape[Erg.x][Erg.y].Objekt >= BAUM1) && (Scape[Erg.x][Erg.y].Objekt <= BAUM4)) 
				 LoadString(g_hInst,BAUMTEXT,TextTmp,1024); 
			else if ((Scape[Erg.x][Erg.y].Objekt >= FLUSS1) && (Scape[Erg.x][Erg.y].Objekt <= SCHLEUSE6))
				 LoadString(g_hInst,FLUSSTEXT,TextTmp,1024); 	
			else if (Scape[Erg.x][Erg.y].Objekt == BUSCH)
				 LoadString(g_hInst,BUSCHTEXT,TextTmp,1024);
			else if (Scape[Erg.x][Erg.y].Objekt == ZELT)
				 LoadString(g_hInst,ZELTTEXT,TextTmp,1024); 
			else if (Scape[Erg.x][Erg.y].Objekt == FELD)
				 LoadString(g_hInst,FELDTEXT,TextTmp,1024); 
			else if (Scape[Erg.x][Erg.y].Objekt == BOOT)
				 LoadString(g_hInst,BOOTTEXT,TextTmp,1024); 
			else if (Scape[Erg.x][Erg.y].Objekt == ROHR)
				 LoadString(g_hInst,ROHRTEXT,TextTmp,1024); 
			else if (Scape[Erg.x][Erg.y].Objekt == SOS)
				 LoadString(g_hInst,SOSTEXT,TextTmp,1024);
			else if (Scape[Erg.x][Erg.y].Objekt == HAUS1)
				 LoadString(g_hInst,HAUS1TEXT,TextTmp,1024); 
			else if (Scape[Erg.x][Erg.y].Objekt == HAUS2)
				 LoadString(g_hInst,HAUS2TEXT,TextTmp,1024); 
			else if (Scape[Erg.x][Erg.y].Objekt == HAUS3)
				 LoadString(g_hInst,HAUS3TEXT,TextTmp,1024); 
			else if (Scape[Erg.x][Erg.y].Objekt == BAUMGROSS)
				 LoadString(g_hInst,BAUMGROSSTEXT,TextTmp,1024); 
			else if (Scape[Erg.x][Erg.y].Objekt == FEUERSTELLE)
				 LoadString(g_hInst,FEUERSTELLETEXT,TextTmp,1024); 
			else if (Scape[Erg.x][Erg.y].Objekt == FEUER)
				 LoadString(g_hInst,FEUERTEXT,TextTmp,1024);
			else if ((Scape[Erg.x][Erg.y].Objekt == WRACK) || (Scape[Erg.x][Erg.y].Objekt == WRACK2))
				 LoadString(g_hInst,WRACKTEXT,TextTmp,1024);
			strcat(Text, TextTmp);
			
			if ((Scape[Erg.x][Erg.y].Objekt >= FELD) && 
				(Scape[Erg.x][Erg.y].Objekt <= FEUERSTELLE))
			{
				//Baufortschrittanzeigen
				strcat(Text, " ");
				strcat(Text, "(");
				sprintf(TextTmp, "%d", (Scape[Erg.x][Erg.y].AkNummer*100)/Bmp[Scape[Erg.x][Erg.y].Objekt].AkAnzahl);
				strcat(Text, TextTmp);
				strcat(Text, "%");
				strcat(Text, ")");
				//ben�tigte Rohstoffe anzeigen
				MakeRohString(Erg.x,Erg.y,-1);
				strcat(Text, RohString);
			}
			
		}
		TextBereich[TXTTEXTFELD].Aktiv = true;
		DrawString(Text,(short)TextBereich[TXTTEXTFELD].rcText.left,
			(short)TextBereich[TXTTEXTFELD].rcText.top,2);
	}
	
	//rechte Maustastescrollen
	if ((Button == 1) && (Push == 0))
	{
		Camera.x += xDiff;
		Camera.y += yDiff;
		CursorTyp = CURICHTUNG;
	}
	
	//Wenn Maustaste gedr�ckt wird
	if ((Button == 0) && (Push == 1)) 
	{
		if ((Erg.x != -1) && (Erg.y != -1) && 
			(Scape[Erg.x][Erg.y].Entdeckt) && (!Guy.Aktiv) &&
			((Erg.x != Guy.Pos.x) || (Erg.y != Guy.Pos.y)) &&
			(Erg.x > 0) && (Erg.x < MAXXKACH-1) &&
			(Erg.y > 0) && (Erg.y < MAXYKACH-1))
		{
				//Klicksound abspielen
			PlaySound(WAVKLICK2, 100);
			if ((Erg.x == RouteZiel.x) && (Erg.y == RouteZiel.y))
			{
				MarkRoute(false);
				Bmp[BUTTSTOP].Phase = 0;
				Guy.Aktiv = true;
				RoutePunkt = -1;
				Steps		= 0;
				Step		= 0;
			}
			else 
			{
				MarkRoute(false);
				RouteStart.x = Guy.Pos.x;
				RouteStart.y = Guy.Pos.y;
				RouteZiel.x = Erg.x;
				RouteZiel.y = Erg.y;
				if (FindTheWay()) MarkRoute(true);
				else //Wenn keine Route gefunden
				{
					RouteStart.x = -1;
					RouteStart.y = -1;
					RouteZiel.x = -1;
					RouteZiel.y = -1;
					MessageBeep(MB_OK);
				}
			}
		}
		else PlaySound(WAVKLICK, 100);
	}
}

void ButtAniAus()
{
	short i;

	for (i=BUTTGITTER;i<=BUTTDESTROY;i++)
	{
		Bmp[i].Animation = false;
	}
}

void MouseInPanel(short Button,short Push)
{
	short mx,my,i;	//Mauskoordinaten in Minimap
	
	//wenn die Maus in der Minimap ist ->
	if ((InRect(MousePosition.x,MousePosition.y,rcKarte)) && (Button ==0) && (Push != -1))
	{
		mx = MousePosition.x-(short)rcKarte.left;
		my = MousePosition.y-(short)rcKarte.top;
		Camera.x = ((KXPIXEL/4)*(mx-my) + MAXXKACH * KXPIXEL /2)
					-(rcSpielflaeche.right-rcSpielflaeche.left)/2;
		Camera.y = ((KXPIXEL/7)*(my+mx))
					-(rcSpielflaeche.bottom-rcSpielflaeche.top)/2;
	}
	else if (InRect(MousePosition.x,MousePosition.y,Bmp[BUTTGITTER].rcDes)) 
	{	
		if (Gitter) DrawText(GITTERAUS,TXTTEXTFELD,2);
		else DrawText(GITTERAN,TXTTEXTFELD,2);
		
		if ((Button==0) && (Push==1))
		{
			PlaySound(WAVKLICK2, 100);
			Gitter = !Gitter;
			Generate();
		}
	}
	else if (InRect(MousePosition.x,MousePosition.y,Bmp[BUTTANIMATION].rcDes)) 
	{	
		if (LAnimation) DrawText(ANIMATIONAUS,TXTTEXTFELD,2);
		else DrawText(ANIMATIONAN,TXTTEXTFELD,2);
		
		if ((Button==0) && (Push==1))
		{
			PlaySound(WAVKLICK2, 100);
			LAnimation = !LAnimation;
			Generate();
		}
	}
	else if (InRect(MousePosition.x,MousePosition.y,Bmp[BUTTSOUND].rcDes)) 
	{	
		if (Soundzustand == 1) DrawText(SOUNDAUS,TXTTEXTFELD,2);
		else if (Soundzustand == 0) DrawText(SOUNDAN,TXTTEXTFELD,2);
		else DrawText(KEINSOUND,TXTTEXTFELD,2);
		
		if ((Button==0) && (Push==1))
		{
			if (Soundzustand == 1) 
			{
				for (i=1;i<WAVANZ;i++) StopSound(i);
				Soundzustand = 0;
			}
			else if (Soundzustand == 0) 
			{
				Soundzustand = 1;
				PlaySound(WAVKLICK2, 100);
			}
			else PlaySound(WAVKLICK, 100);
		}
	}
	else if (InRect(MousePosition.x,MousePosition.y,Bmp[BUTTBEENDEN].rcDes)) 
	{	
		DrawText(BEENDEN,TXTTEXTFELD,2);
		Bmp[BUTTBEENDEN].Animation = true;
		if ((Button==0) && (Push==1))
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			Guy.Aktiv = false;
			Guy.Aktion = AKSPIELVERLASSEN;
		}
	}
	else if (InRect(MousePosition.x,MousePosition.y,Bmp[BUTTNEU].rcDes)) 
	{	
		DrawText(NEU,TXTTEXTFELD,2);
		Bmp[BUTTNEU].Animation = true;
		if ((Button==0) && (Push==1))
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			Guy.Aktiv = false;
			Guy.Aktion = AKNEUBEGINNEN;
		}
	}
	else if (InRect(MousePosition.x,MousePosition.y,Bmp[BUTTTAGNEU].rcDes)) 
	{	
		DrawText(TAGNEU2,TXTTEXTFELD,2);
		Bmp[BUTTTAGNEU].Animation = true;
		if ((Button==0) && (Push==1))
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			Guy.Aktiv = false;
			Guy.Aktion = AKTAGNEUBEGINNEN;
		}
	}
	else if	(InRect(MousePosition.x,MousePosition.y,Bmp[BUTTAKTION].rcDes))
	{
		if (HauptMenue == MEAKTION) DrawText(MEAKTIONZU,TXTTEXTFELD,2);
		else DrawText(MEAKTIONAUF,TXTTEXTFELD,2);
		Bmp[BUTTAKTION].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if (HauptMenue == MEAKTION) HauptMenue = MEKEINS;
			else HauptMenue = MEAKTION; 
		}
	}
	else if	(InRect(MousePosition.x,MousePosition.y,Bmp[BUTTBAUEN].rcDes) && 
		    (Bmp[BUTTBAUEN].Phase != -1))
	{
		if (HauptMenue == MEBAUEN) DrawText(MEBAUENZU,TXTTEXTFELD,2);
		else DrawText(MEBAUENAUF,TXTTEXTFELD,2);
		Bmp[BUTTBAUEN].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if (HauptMenue == MEBAUEN) HauptMenue = MEKEINS;
			else HauptMenue = MEBAUEN; 
		}
	}
	else if	(InRect(MousePosition.x,MousePosition.y,Bmp[BUTTINVENTAR].rcDes))
	{
		if (HauptMenue == MEINVENTAR) DrawText(MEINVENTARZU,TXTTEXTFELD,2);
		else DrawText(MEINVENTARAUF,TXTTEXTFELD,2);
		Bmp[BUTTINVENTAR].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if (HauptMenue == MEINVENTAR) HauptMenue = MEKEINS;
			else HauptMenue = MEINVENTAR; 
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTWEITER].rcDes)) &&
		     (Bmp[BUTTWEITER].Phase != -1))
	{
		DrawText(WEITER,TXTTEXTFELD,2);
	
		Bmp[BUTTWEITER].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			Bmp[BUTTSTOP].Phase = 0;
			MarkRoute(false);
			RouteZiel.x = -1;
			RouteZiel.y = -1;
			Guy.PosAlt = Guy.PosScreen;
			ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x,
				       Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y);
			switch (Scape[Guy.Pos.x][Guy.Pos.y].Objekt)
			{
			case ZELT: Guy.Aktion = AKZELT; break;
			case FELD: Guy.Aktion = AKFELD; break;
			case BOOT: Guy.Aktion = AKBOOT; break;
			case ROHR: Guy.Aktion = AKROHR; break;
			case SOS:  Guy.Aktion = AKSOS;  break;
			case HAUS1:Guy.Aktion = AKHAUS1;break;
			case HAUS2:Guy.Aktion = AKHAUS2;break;
			case HAUS3:Guy.Aktion = AKHAUS3;break;
			case FEUERSTELLE:Guy.Aktion = AKFEUERSTELLE;break;
			}
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTSTOP].rcDes)) &&
		     (Bmp[BUTTSTOP].Phase != -1))
	{
		DrawText(STOP,TXTTEXTFELD,2);
	
		Bmp[BUTTSTOP].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			Guy.Aktion = AKABBRUCH;
			Bmp[BUTTSTOP].Phase = -1;
		}
	}

	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTABLEGEN].rcDes)) && 
		     (Bmp[BUTTABLEGEN].Phase != -1))
	{
		DrawText(BEGINNABLEGEN,TXTTEXTFELD,2);
		Bmp[BUTTABLEGEN].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			if (Scape[Guy.Pos.x][Guy.Pos.y].Art != 1) Guy.Aktion = AKABLEGEN;
			else Guy.Aktion = AKANLEGEN;
			
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTSUCHEN].rcDes)) && 
		     (HauptMenue == MEAKTION) && (Bmp[BUTTSUCHEN].Phase != -1))
	{
		DrawText(BEGINNSUCHEN,TXTTEXTFELD,2);
		Bmp[BUTTSUCHEN].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			Guy.Aktion = AKSUCHEN;
		}		
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTESSEN].rcDes)) && 
			 (HauptMenue == MEAKTION) && (Bmp[BUTTESSEN].Phase != -1))
	{
		DrawText(BEGINNESSEN,TXTTEXTFELD,2);
		Bmp[BUTTESSEN].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			if (((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == BUSCH) || 
				 (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == FELD )) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Phase == Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl-1)) Guy.Aktion = AKESSEN;
			else if (((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= FLUSS1) && 
				(Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= SCHLEUSE6)) ||
				((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ROHR) &&
				 (Scape[Guy.Pos.x][Guy.Pos.y].Phase == 1)))
				Guy.Aktion = AKTRINKEN;
			else PapierText = DrawText(KEINESSENTRINKEN,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTSCHLAFEN].rcDes)) && 
			 (HauptMenue == MEAKTION) && (Bmp[BUTTSCHLAFEN].Phase != -1))
	{
		DrawText(BEGINNSCHLAFEN,TXTTEXTFELD,2);
		Bmp[BUTTSCHLAFEN].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if (Scape[Guy.Pos.x][Guy.Pos.y].Art != 1)
			{
				Guy.AkNummer = 0;
				Guy.Aktion = AKSCHLAFEN;
			}
			else PapierText = DrawText(NICHTAUFWASSERSCHLAFEN,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTFAELLEN].rcDes)) && 
		     (HauptMenue == MEAKTION) && (Bmp[BUTTFAELLEN].Phase != -1))
	{
		DrawText(BEGINNFAELLEN,TXTTEXTFELD,2);
		Bmp[BUTTFAELLEN].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			if (Guy.Inventar[ROHSTAMM] <= 10)
			{
				if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= BAUM1) &&
					(Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= BAUM4)) 
				{
					Guy.Aktion = AKFAELLEN;
				}
				else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == BAUMGROSS) ||
					     ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= HAUS1) &&
					      (Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= HAUS3)))
					PapierText = DrawText(BAUMZUGROSS,TXTPAPIER,1);
				else PapierText = DrawText(KEINBAUM,TXTPAPIER,1);
			}
			else PapierText = DrawText(ROHSTAMMZUVIEL,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTANGELN].rcDes)) && 
		     (HauptMenue == MEAKTION) && (Bmp[BUTTANGELN].Phase != -1))
	{
		DrawText(BEGINNANGELN,TXTTEXTFELD,2);
		Bmp[BUTTANGELN].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			if (((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= FLUSS1) &&
				 (Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= SCHLEUSE6)) ||
				(BootsFahrt)) Guy.Aktion = AKANGELN;
			else PapierText = DrawText(KEINWASSER,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTANZUENDEN].rcDes)) && 
		     (HauptMenue == MEAKTION) && (Bmp[BUTTANZUENDEN].Phase != -1))
	{
		DrawText(BEGINNANZUENDEN,TXTTEXTFELD,2);
		Bmp[BUTTANZUENDEN].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == FEUERSTELLE) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
				  Guy.Aktion = AKANZUENDEN;
			else PapierText = DrawText(KEINEFEUERST,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTAUSSCHAU].rcDes)) && 
		     (HauptMenue == MEAKTION) && (Bmp[BUTTAUSSCHAU].Phase != -1))
	{
		DrawText(BEGINNAUSSCHAU,TXTTEXTFELD,2);
		Bmp[BUTTAUSSCHAU].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			if (Scape[Guy.Pos.x][Guy.Pos.y].Art != 1)
			{
				Guy.AkNummer = 0;
				Guy.Aktion = AKAUSSCHAU;
			}
			else PapierText = DrawText(WELLENZUHOCH,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTSCHATZ].rcDes)) && 
		     (HauptMenue == MEAKTION) && (Bmp[BUTTSCHATZ].Phase != -1))
	{
		DrawText(BEGINNSCHATZ,TXTTEXTFELD,2);
		Bmp[BUTTSCHATZ].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Art != 1) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Typ == 0) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Objekt == -1))
			{
				Guy.AkNummer = 0;
				Guy.Aktion = AKSCHATZ;
			}
			else PapierText = DrawText(GRABENBEDINGUNGEN,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTSCHLEUDER].rcDes)) && 
		     (HauptMenue == MEAKTION) && (Bmp[BUTTSCHLEUDER].Phase != -1))
	{
		DrawText(BEGINNSCHLEUDER,TXTTEXTFELD,2);
		Bmp[BUTTSCHLEUDER].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			Guy.AkNummer = 0;
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= BAUM1) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= BAUM4))
			{
				Guy.AkNummer = 0;
				Guy.Aktion = AKSCHLEUDER;
			}
			else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == BAUMGROSS) ||
				((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= HAUS1) &&
				 (Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= HAUS3)))
				 PapierText = DrawText(BAUMZUGROSS,TXTPAPIER,1);
			else PapierText = DrawText(KEINVOGEL,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTSCHATZKARTE].rcDes)) && 
		     (HauptMenue == MEAKTION) && (Bmp[BUTTSCHATZKARTE].Phase != -1))
	{
		DrawText(BEGINNSCHATZKARTE,TXTTEXTFELD,2);
		Bmp[BUTTSCHATZKARTE].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			DrawSchatzkarte();
		}
	}
    else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTFELD].rcDes)) && 
		     (HauptMenue == MEBAUEN) && (Bmp[BUTTFELD].Phase != -1))
	{
		LoadString(g_hInst,BEGINNFELD,StdString,1024);
		MakeRohString(-1,-1,FELD);
		strcat(StdString, RohString);
		TextBereich[TXTTEXTFELD].Aktiv = true;
		DrawString(StdString,(short)TextBereich[TXTTEXTFELD].rcText.left,
						     (short)TextBereich[TXTTEXTFELD].rcText.top,2);
		
		Bmp[BUTTFELD].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == -1) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Typ    ==  0) && 
				(Scape[Guy.Pos.x][Guy.Pos.y].Art    ==  4)) 
			{
				Scape[Guy.Pos.x][Guy.Pos.y].AkNummer = 0;
				Bmp[BUTTSTOP].Phase = 0;
				Guy.Aktion = AKFELD;
			}
			else if	((Bmp[BUTTWEITER].Phase != -1) && (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == FELD))
			{
				Bmp[BUTTSTOP].Phase = 0;
				Guy.PosAlt = Guy.PosScreen;
				ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x,
					Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y);
				Guy.Aktion = AKFELD;
			}
			else PapierText = DrawText(FELDBEDINGUNGEN,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTZELT].rcDes)) && 
		     (HauptMenue == MEBAUEN) && (Bmp[BUTTZELT].Phase != -1))
	{
		LoadString(g_hInst,BEGINNZELT,StdString,1024);
		MakeRohString(-1,-1,ZELT);
		strcat(StdString, RohString);
		TextBereich[TXTTEXTFELD].Aktiv = true;
		DrawString(StdString,(short)TextBereich[TXTTEXTFELD].rcText.left,
						     (short)TextBereich[TXTTEXTFELD].rcText.top,2);
		
		Bmp[BUTTZELT].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == -1) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Typ    ==  0) && 
				(Scape[Guy.Pos.x][Guy.Pos.y].Art    != -1)) 
			{
				Scape[Guy.Pos.x][Guy.Pos.y].AkNummer = 0;
				Bmp[BUTTSTOP].Phase = 0;
				Guy.Aktion = AKZELT;
			}
			else if	((Bmp[BUTTWEITER].Phase != -1) && 
				     (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ZELT))
			{
				Bmp[BUTTSTOP].Phase = 0;
				Guy.PosAlt = Guy.PosScreen;
				ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x,
					Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y);
				Guy.Aktion = AKZELT;
			}
			else PapierText = DrawText(ZELTBEDINGUNGEN,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTBOOT].rcDes)) && 
		     (HauptMenue == MEBAUEN) && (Bmp[BUTTBOOT].Phase != -1))
	{
		LoadString(g_hInst,BEGINNBOOT,StdString,1024);
		MakeRohString(-1,-1,BOOT);
		strcat(StdString, RohString);
		TextBereich[TXTTEXTFELD].Aktiv = true;
		DrawString(StdString,(short)TextBereich[TXTTEXTFELD].rcText.left,
						     (short)TextBereich[TXTTEXTFELD].rcText.top,2);
		
		Bmp[BUTTBOOT].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == -1) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Art    ==  2) &&
				((Scape[Guy.Pos.x-1][Guy.Pos.y].Art == 1) || 
				 (Scape[Guy.Pos.x][Guy.Pos.y-1].Art == 1) ||
				 (Scape[Guy.Pos.x+1][Guy.Pos.y].Art == 1) ||
				 (Scape[Guy.Pos.x][Guy.Pos.y+1].Art == 1))) 
			{
				Scape[Guy.Pos.x][Guy.Pos.y].AkNummer = 0;
				Bmp[BUTTSTOP].Phase = 0;
				Guy.Aktion = AKBOOT;
			}
			else if	((Bmp[BUTTWEITER].Phase != -1) && 
				     (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == BOOT))
			{
				Bmp[BUTTSTOP].Phase = 0;
				Guy.PosAlt = Guy.PosScreen;
				ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x,
					Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y);
				Guy.Aktion = AKBOOT;
			}
			else PapierText = DrawText(BOOTBEDINGUNGEN,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTROHR].rcDes)) && 
		     (HauptMenue == MEBAUEN) && (Bmp[BUTTROHR].Phase != -1))
	{
		LoadString(g_hInst,BEGINNROHR,StdString,1024);
		MakeRohString(-1,-1,ROHR);
		strcat(StdString, RohString);
		TextBereich[TXTTEXTFELD].Aktiv = true;
		DrawString(StdString,(short)TextBereich[TXTTEXTFELD].rcText.left,
						     (short)TextBereich[TXTTEXTFELD].rcText.top,2);
		
		Bmp[BUTTROHR].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == -1) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Typ    ==  0)) 
			{
				Scape[Guy.Pos.x][Guy.Pos.y].AkNummer = 0;
				Bmp[BUTTSTOP].Phase = 0;
				Guy.Aktion = AKROHR;
			}
			else if	((Bmp[BUTTWEITER].Phase != -1) && 
				     (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ROHR))
			{
				Bmp[BUTTSTOP].Phase = 0;
				Guy.PosAlt = Guy.PosScreen;
				ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x,
					Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y);
				Guy.Aktion = AKROHR;
			}
			else PapierText = DrawText(ROHRBEDINGUNGEN,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTSOS].rcDes)) && 
		     (HauptMenue == MEBAUEN) && (Bmp[BUTTSOS].Phase != -1))
	{
		LoadString(g_hInst,BEGINNSOS,StdString,1024);
		MakeRohString(-1,-1,SOS);
		strcat(StdString, RohString);
		TextBereich[TXTTEXTFELD].Aktiv = true;
		DrawString(StdString,(short)TextBereich[TXTTEXTFELD].rcText.left,
						     (short)TextBereich[TXTTEXTFELD].rcText.top,2);
		
		Bmp[BUTTSOS].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == -1) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Typ    ==  0)) 
			{
				Scape[Guy.Pos.x][Guy.Pos.y].AkNummer = 0;
				Bmp[BUTTSTOP].Phase = 0;
				Guy.Aktion = AKSOS;
			}
			else if	((Bmp[BUTTWEITER].Phase != -1) && 
				     (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == SOS))
			{
				Bmp[BUTTSTOP].Phase = 0;
				Guy.PosAlt = Guy.PosScreen;
				ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x,
					Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y);
				Guy.Aktion = AKSOS;
			}
			else PapierText = DrawText(SOSBEDINGUNGEN,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTHAUS1].rcDes)) && 
		     (HauptMenue == MEBAUEN) && (Bmp[BUTTHAUS1].Phase != -1))
	{
		LoadString(g_hInst,BEGINNHAUS1,StdString,1024);
		MakeRohString(-1,-1,HAUS1);
		strcat(StdString, RohString);
		TextBereich[TXTTEXTFELD].Aktiv = true;
		DrawString(StdString,(short)TextBereich[TXTTEXTFELD].rcText.left,
						     (short)TextBereich[TXTTEXTFELD].rcText.top,2);
		
		Bmp[BUTTHAUS1].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= BAUM1) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= BAUM4))
				PapierText = DrawText(BAUMZUKLEIN,TXTPAPIER,1);
			else if (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == BAUMGROSS) 
			{
				Scape[Guy.Pos.x][Guy.Pos.y].AkNummer = 0;
				Bmp[BUTTSTOP].Phase = 0;
				Guy.Aktion = AKHAUS1;
			}
			else if	((Bmp[BUTTWEITER].Phase != -1) && 
				     (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS1))
			{
				Bmp[BUTTSTOP].Phase = 0;
				Guy.PosAlt = Guy.PosScreen;
				ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x,
					Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y);
				Guy.Aktion = AKHAUS1;
			}
			else PapierText = DrawText(GEGENDNICHT,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTHAUS2].rcDes)) && 
		     (HauptMenue == MEBAUEN) && (Bmp[BUTTHAUS2].Phase != -1))
	{
		LoadString(g_hInst,BEGINNHAUS2,StdString,1024);
		MakeRohString(-1,-1,HAUS2);
		strcat(StdString, RohString);
		TextBereich[TXTTEXTFELD].Aktiv = true;
		DrawString(StdString,(short)TextBereich[TXTTEXTFELD].rcText.left,
						     (short)TextBereich[TXTTEXTFELD].rcText.top,2);
		
		Bmp[BUTTHAUS2].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= BAUM1) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= BAUM4))
				PapierText = DrawText(BAUMZUKLEIN,TXTPAPIER,1);
			else if (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == BAUMGROSS)
				PapierText = DrawText(NICHTOHNELEITER,TXTPAPIER,1);
			else if (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS1) 
				{
					Scape[Guy.Pos.x][Guy.Pos.y].AkNummer = 0;
					Bmp[BUTTSTOP].Phase = 0;
					Guy.Aktion = AKHAUS2;
				}
			else if	((Bmp[BUTTWEITER].Phase != -1) && 
				     (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS2))
			{
				Bmp[BUTTSTOP].Phase = 0;
				Guy.PosAlt = Guy.PosScreen;
				ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x,
					Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y);
				Guy.Aktion = AKHAUS2;
			}
			else PapierText = DrawText(GEGENDNICHT,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTHAUS3].rcDes)) && 
		     (HauptMenue == MEBAUEN) && (Bmp[BUTTHAUS3].Phase != -1))
	{
		LoadString(g_hInst,BEGINNHAUS3,StdString,1024);
		MakeRohString(-1,-1,HAUS3);
		strcat(StdString, RohString);
		TextBereich[TXTTEXTFELD].Aktiv = true;
		DrawString(StdString,(short)TextBereich[TXTTEXTFELD].rcText.left,
						     (short)TextBereich[TXTTEXTFELD].rcText.top,2);
		
		Bmp[BUTTHAUS3].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= BAUM1) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= BAUM4))
				PapierText = DrawText(BAUMZUKLEIN,TXTPAPIER,1);
			else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == BAUMGROSS) ||
					 (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS1))
				PapierText = DrawText(NICHTOHNEPLATTFORM,TXTPAPIER,1);
			else if (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS2) 
			{
				Scape[Guy.Pos.x][Guy.Pos.y].AkNummer = 0;
				Bmp[BUTTSTOP].Phase = 0;
				Guy.Aktion = AKHAUS3;
			}
			else if	((Bmp[BUTTWEITER].Phase != -1) && 
				     (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3))
			{
				Bmp[BUTTSTOP].Phase = 0;
				Guy.PosAlt = Guy.PosScreen;
				ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x,
					Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y);
				Guy.Aktion = AKHAUS3;
			}
			else PapierText = DrawText(GEGENDNICHT,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTFEUERST].rcDes)) && 
		     (HauptMenue == MEBAUEN) && (Bmp[BUTTFEUERST].Phase != -1))
	{
		LoadString(g_hInst,BEGINNFEUERSTELLE,StdString,1024);
		MakeRohString(-1,-1,FEUERSTELLE);
		strcat(StdString, RohString);
		TextBereich[TXTTEXTFELD].Aktiv = true;
		DrawString(StdString,(short)TextBereich[TXTTEXTFELD].rcText.left,
						     (short)TextBereich[TXTTEXTFELD].rcText.top,2);
		
		Bmp[BUTTFEUERST].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == -1) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Typ    ==  0)) 
			{
				Scape[Guy.Pos.x][Guy.Pos.y].AkNummer = 0;
				Bmp[BUTTSTOP].Phase = 0;
				Guy.Aktion = AKFEUERSTELLE;
			}
			else if	((Bmp[BUTTWEITER].Phase != -1) && 
				     (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == FEUERSTELLE))
			{
				Bmp[BUTTSTOP].Phase = 0;
				Guy.PosAlt = Guy.PosScreen;
				ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x,
					Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y);
				Guy.Aktion = AKFEUERSTELLE;
			}
			else PapierText = DrawText(FEUERSTELLENBEDINGUNGEN,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[BUTTDESTROY].rcDes)) && 
		     (HauptMenue == MEBAUEN) && (Bmp[BUTTDESTROY].Phase != -1))
	{
		DrawText(BEGINNDESTROY,TXTTEXTFELD,2);
		Bmp[BUTTDESTROY].Animation = true;
		if ((Button==0) && (Push==1)) 
		{
			PlaySound(WAVKLICK2, 100);
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= FELD) &&
				(Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= FEUERSTELLE)) 
			{
				Guy.AkNummer = 0;
				Guy.Aktion = AKDESTROY;
			}
			else PapierText = DrawText(KEINBAUWERK,TXTPAPIER,1);
		}
	}
	else if	((InRect(MousePosition.x,MousePosition.y,Bmp[INVPAPIER].rcDes)) && (HauptMenue == MEINVENTAR))
	{
		for (i=ROHAST;i<=ROHSCHLEUDER;i++)
		{
			if	(InRect(MousePosition.x,MousePosition.y,Bmp[i].rcDes) && (Guy.Inventar[i]>0))
			{
				if	((Button==0) && (Push==1)) 
				{
					if (TwoClicks == -1) 
					{
						CursorTyp = i;
						TwoClicks = i;
					}
					else CheckBenutze(i);
				}
				switch(i)
				{
				case ROHAST: DrawText(AST,TXTTEXTFELD,2); break;
				case ROHSTEIN: DrawText(STEIN,TXTTEXTFELD,2); break;	
				case ROHAXT: DrawText(AXT,TXTTEXTFELD,2); break;
				case ROHBLATT: DrawText(BLATT,TXTTEXTFELD,2); break;
				case ROHSTAMM: DrawText(STAMM,TXTTEXTFELD,2); break;
				case ROHEGGE: DrawText(EGGE,TXTTEXTFELD,2); break;
				case ROHLIANE: DrawText(LIANE,TXTTEXTFELD,2); break;
				case ROHANGEL: DrawText(ANGEL,TXTTEXTFELD,2); break;
				case ROHHAMMER: DrawText(HAMMER,TXTTEXTFELD,2); break;
				case ROHFERNROHR: DrawText(FERNROHR,TXTTEXTFELD,2); break;
				case ROHSTREICHHOLZ: DrawText(STREICHHOLZ,TXTTEXTFELD,2); break;
				case ROHSCHAUFEL: DrawText(SCHAUFEL,TXTTEXTFELD,2); break;
				case ROHKARTE: DrawText(KARTE,TXTTEXTFELD,2); break;
				case ROHSCHLEUDER: DrawText(SCHLEUDER,TXTTEXTFELD,2); break;
				}

				break;
			}
		}
	}
	else if (InRect(MousePosition.x,MousePosition.y,TextBereich[TXTTAGESZEIT].rcText))
			DrawText(SOSPAET,TXTTEXTFELD,2);
	else if (InRect(MousePosition.x,MousePosition.y,TextBereich[TXTCHANCE].rcText)) 
			DrawText(CHANCETEXT,TXTTEXTFELD,2);
	else //TwoClicks l�schen
	{
		if	((Button==0) && (Push==1)) PlaySound(WAVKLICK, 100);
		TwoClicks = -1;
	}
}
bool InDreieck(short X, short Y, short X0, short Y0, short X1, short Y1, short X3, short Y3)
{
	float	x,y,x0,y0,x1,y1,x3,y3,a,b,c,d;
	
	x=(float)X;y=(float)Y;x0=(float)X0;y0=(float)Y0;x1=(float)X1;y1=(float)Y1;x3=(float)X3;y3=(float)Y3;
	
	c= (x-x1)/(x0-x1);
	if (c<0) return false;
	d= ((y-y3)*(x0-x1)-(x-x1)*(y0-y3))/((y1-y3)*(x0-x1));
	if (d<0) return false;
	b= ((y-y0)*(x1-x0)-(x-x0)*(y1-y0))/((x1-x0)*(y3-y1));
	if (b<0) return false;
	a= (x-x0)/(x1-x0)-b;
	if (a<0) return false;
	return true;
}

bool InRect(short x,short y,RECT rcRect)
{
	if  ((x <= rcRect.right) &&	(x >= rcRect.left) &&
		 (y <= rcRect.bottom) && (y >= rcRect.top))	return true;
	return false;
}

inline DWORD RGB2DWORD(BYTE r, BYTE g, BYTE b)
{
	DWORD Erg = 0;
	
	if (ddpf.dwRBitMask == 63488)
	{
		Erg = (DWORD)((r & 0xF8) >> 3);
		Erg = Erg << 6;
		Erg = Erg | (DWORD)((g & 0xFC) >> 2);
		Erg = Erg << 5;
		Erg = Erg | (DWORD)((b & 0xF8) >> 3);
	}
	else if (ddpf.dwRBitMask == 31744)
	{
		Erg = (DWORD)((r & 0xF8) >> 3);
		Erg = Erg << 5;
		Erg = Erg | (DWORD)((g & 0xF8) >> 3);
		Erg = Erg << 5;
		Erg = Erg | (DWORD)((b & 0xF8) >> 3);
	}
	else 
	{
		Erg = 0;
		MessageBeep(MB_OK);
	}
	return Erg;
}

inline void DWORD2RGB(DWORD color)
{
	if (ddpf.dwRBitMask == 63488)
	{
		rgbStruct.r = (byte)((color & 0xF800) >> 8);
		rgbStruct.g = (byte)((color & 0x07E0) >> 3);
		rgbStruct.b = (byte)((color & 0x001F) << 3);
	}
	else if (ddpf.dwRBitMask == 31744)
	{
		rgbStruct.r = (byte)((color & 0x7C00) >> 7);
		rgbStruct.g = (byte)((color & 0x03E0) >> 2);
		rgbStruct.b = (byte)((color & 0x001F) << 3);
	}
}

void PutPixel(short x, short y, DWORD color, LPDDSURFACEDESC2 ddsd)
{
    WORD *pixels = (WORD *)ddsd->lpSurface;
    //DWORD pitch = ddsd->dwWidth+2;
	DWORD pitch = ddsd->lPitch>>1;
	pixels[y*pitch + x] = (WORD)color; 
}

void GetPixel(short x, short y, LPDDSURFACEDESC2 ddsd)
{
    DWORD color;

	WORD *pixels = (WORD *)ddsd->lpSurface;
    //DWORD pitch = ddsd->dwWidth;
   	DWORD pitch = ddsd->lPitch>>1;
	color = pixels[y*pitch + x];

	DWORD2RGB(color);
}

void NeuesSpiel(bool neu)
{
	short x,y;
	bool LoadOK;

	InitStructs();
	
	if (!neu) LoadOK = LoadGame();
	
	if ((!LoadOK) || (neu))
	{
		//F�r die Statusanzeige
		rcRectdes.left		= 0;
		rcRectdes.top		= 0;
		rcRectdes.right		= MAXX;
		rcRectdes.bottom	= MAXY;
		ddbltfx.dwFillColor = RGB2DWORD(70,70,100);
		lpDDSPrimary->Blt(&rcRectdes, null,null,DDBLT_COLORFILL, &ddbltfx);
		ddbltfx.dwFillColor = RGB2DWORD(255,0,255);
		lpDDSSchrift->Blt(&rcRectdes, null,null,DDBLT_COLORFILL, &ddbltfx);
		
		//Landschaft erzeugen
		
		DrawString("Erschaffe Landschaft...",5,5,2);
		rcRectdes.left		= 0;
		rcRectdes.top		= 0;
		rcRectdes.right		= MAXX;
		rcRectdes.bottom	= MAXY;
		lpDDSPrimary->Blt(&rcRectdes,lpDDSSchrift,&rcRectdes,DDBLT_KEYSRC | DDBLT_WAIT,null);
		Compute(200,600);
		
		DrawString("Ueberflute Land...",5,35,2);
		rcRectdes.left		= 0;
		rcRectdes.top		= 0;
		rcRectdes.right		= MAXX;
		rcRectdes.bottom	= MAXY;
		lpDDSPrimary->Blt(&rcRectdes,lpDDSSchrift,&rcRectdes,DDBLT_KEYSRC | DDBLT_WAIT,null);
		Meer();
		
		DrawString("Lege Fluss fest...",5,65,2);
		rcRectdes.left		= 0;
		rcRectdes.top		= 0;
		rcRectdes.right		= MAXX;
		rcRectdes.bottom	= MAXY;
		lpDDSPrimary->Blt(&rcRectdes,lpDDSSchrift,&rcRectdes,DDBLT_KEYSRC | DDBLT_WAIT,null);
		Fluss(); 
		CalcKoor();
		
		DrawString("Pflanze Baeume...",5,95,2);
		rcRectdes.left		= 0;
		rcRectdes.top		= 0;
		rcRectdes.right		= MAXX;
		rcRectdes.bottom	= MAXY;
		lpDDSPrimary->Blt(&rcRectdes,lpDDSSchrift,&rcRectdes,DDBLT_KEYSRC | DDBLT_WAIT,null);
		Baeume(30);
		
		Piratenwrack();
		
		//Guy Position
		Guy.Pos.x = 1;
		Guy.Pos.y = MAXYKACH /2;
		Guy.PosScreen.x =   
			(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].x +
			Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].x) /2;
		Guy.PosScreen.y =   
			(Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].y +
			Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].y) /2;
		
		Camera.x = Guy.PosScreen.x-rcGesamt.right/2;
		Camera.y = Guy.PosScreen.y-rcGesamt.bottom/2;
		
		Chance = 0;
		
		BootsFahrt = false;
		if (!BootsFahrt) ChangeBootsFahrt();
		
		Tag = 1; Stunden = 0; Minuten = 0;
		
		Spielzustand = SZINTRO;
		Guy.Aktiv = false;
		Guy.Zustand = GUYSCHIFF;
		Guy.AkNummer = 0;
		Guy.Aktion = AKINTRO;
	}

	//SchriftSurface l�schen
	rcRectdes.left = 0;
	rcRectdes.top = 0;
	rcRectdes.right = MAXX;
	rcRectdes.bottom = MAXY;
	ddbltfx.dwFillColor = RGB2DWORD(255,0,255);
	lpDDSSchrift->Blt(&rcRectdes, null,null,DDBLT_COLORFILL, &ddbltfx);
	
	BOOL Anitmp = LAnimation;
	bool Entdeckttmp[MAXXKACH][MAXYKACH];

	LAnimation = false;
	//Schatzvergraben und Schatzkarte malen
	for (y=0;y<MAXYKACH;y++) for (x=0;x<MAXXKACH;x++) 
	{
		Entdeckttmp[x][y] = Scape[x][y].Entdeckt;
		Scape[x][y].Entdeckt = true;
	}
	Generate();//Einmal vor dem Schatz schon entdeckt malen
	Schatz();
	for (y=0;y<MAXYKACH;y++) for (x=0;x<MAXXKACH;x++) Scape[x][y].Entdeckt = Entdeckttmp[x][y];
	Entdecken();
	LAnimation = Anitmp;
	Generate(); //Und nochmal ohne das die Gegend entdeckt ist
	Guy.PosAlt = Guy.PosScreen;
}

void Generate()
{
	
	short				x,y;
	short				i;
	
	//Die Kartehintergrundfarbe
	rcRectdes.left		= 0;
	rcRectdes.top		= 0;
	rcRectdes.right     = 2*MAXXKACH;
	rcRectdes.bottom	= 2*MAXYKACH;
	ddbltfx.dwFillColor = RGB2DWORD(247,222,191);
	lpDDSKarte->Blt(&rcRectdes, null,null,DDBLT_COLORFILL, &ddbltfx);

	//Die Landschaftshintergrundfarbe
	rcRectdes.left		= 0;
	rcRectdes.top		= 0;
	rcRectdes.right     = MAXSCAPEX;
	rcRectdes.bottom	= MAXSCAPEY;
	ddbltfx.dwFillColor = RGB2DWORD(0,0,0);
	lpDDSScape->Blt(&rcRectdes, null,null,DDBLT_COLORFILL, &ddbltfx);

	for (y=0;y<MAXYKACH;y++)
		for (x=0;x<MAXXKACH;x++)
		{
			if	(!Scape[x][y].Entdeckt) continue; //Nicht entdeckte Felder nicht malen

			rcRectdes.left = Scape[x][y].xScreen;
			rcRectdes.top  = Scape[x][y].yScreen;
			rcRectdes.right = rcRectdes.left+KXPIXEL;
			rcRectdes.bottom= rcRectdes.top +KYPIXEL;
			if (Scape[x][y].Art == 4)
			{
				rcRectsrc.left		= KXPIXEL * Scape[x][y].Typ;
				rcRectsrc.right		= KXPIXEL * Scape[x][y].Typ+KXPIXEL;
				rcRectsrc.top		= 0;
				rcRectsrc.bottom	= KYPIXEL;
			}
			else if (Scape[x][y].Art == 0) //trockenes Land
			{
				rcRectsrc.left		= KXPIXEL * Scape[x][y].Typ;
				rcRectsrc.right		= KXPIXEL * Scape[x][y].Typ+KXPIXEL;
				rcRectsrc.top		= 4*KYPIXEL;
				rcRectsrc.bottom	= 5*KYPIXEL;
			}
			else
			{
				if ((Scape[x][y].Typ == 0) && (Scape[x][y].Art == 1))
				{
					rcRectsrc.left		= 0*KXPIXEL;
					rcRectsrc.top		= 3*KYPIXEL;
					rcRectsrc.right		= 1*KXPIXEL;
					rcRectsrc.bottom	= 4*KYPIXEL;
				}
				if ((Scape[x][y].Typ == 0) && (Scape[x][y].Art == 2))
				{
					rcRectsrc.left		= 1*KXPIXEL;
					rcRectsrc.top		= 3*KYPIXEL;
					rcRectsrc.right		= 2*KXPIXEL;
					rcRectsrc.bottom	= 4*KYPIXEL;
				}
				if ((Scape[x][y].Typ == 0) && (Scape[x][y].Art == 3))
				{
					rcRectsrc.left		= 2*KXPIXEL;
					rcRectsrc.top		= 3*KYPIXEL;
					rcRectsrc.right		= 3*KXPIXEL;
					rcRectsrc.bottom	= 4*KYPIXEL;
				}
			}
			//Landschaftskacheln zeichnen
			Blitten(lpDDSMisc,lpDDSScape,true);
						
			//Gitter dr�berlegen
			if (Gitter)
			{
				rcRectsrc.left		= KXPIXEL * Scape[x][y].Typ;
				rcRectsrc.right		= KXPIXEL * Scape[x][y].Typ+KXPIXEL;
				rcRectsrc.top		= 1*KYPIXEL;
				rcRectsrc.bottom	= 1*KYPIXEL+KYPIXEL;
				Blitten(lpDDSMisc,lpDDSScape,true);
			}
			
			//Landschaftsobjekte zeichnen (falls Animationen ausgeschaltet sind)
			if ((!LAnimation) && (Scape[x][y].Objekt != -1))
			{
				if ((Scape[x][y].Objekt >= MEERWELLEN) && (Scape[x][y].Objekt <=SCHLEUSE6))
				{
					rcRectsrc.left		= Bmp[Scape[x][y].Objekt].rcSrc.left;
					rcRectsrc.right		= Bmp[Scape[x][y].Objekt].rcSrc.right;
					if (Scape[x][y].Objekt == MEERWELLEN)
					{
						i=rand()%6;
						rcRectsrc.top		= Bmp[Scape[x][y].Objekt].rcSrc.top+i*Bmp[Scape[x][y].Objekt].Hoehe;
					    rcRectsrc.bottom	= Bmp[Scape[x][y].Objekt].rcSrc.bottom+i*Bmp[Scape[x][y].Objekt].Hoehe;
					}
					else
					{
						rcRectsrc.top		= Bmp[Scape[x][y].Objekt].rcSrc.top;
						rcRectsrc.bottom	= Bmp[Scape[x][y].Objekt].rcSrc.bottom;
					}
				rcRectdes.left		= Scape[x][y].xScreen+Bmp[Scape[x][y].Objekt].rcDes.left;
				rcRectdes.right		= Scape[x][y].xScreen+Bmp[Scape[x][y].Objekt].rcDes.right;
				rcRectdes.top		= Scape[x][y].yScreen+Bmp[Scape[x][y].Objekt].rcDes.top;
				rcRectdes.bottom	= Scape[x][y].yScreen+Bmp[Scape[x][y].Objekt].rcDes.bottom;
				//Landschaftsobjekt zeichnen
				Blitten(lpDDSAnimation,lpDDSScape,true);
				}
			}

			//MiniMap zeichnen
			rcRectdes.left		= 2*x;
			rcRectdes.top		= 2*y;
			rcRectdes.right     = rcRectdes.left+2;
			rcRectdes.bottom	= rcRectdes.top+2;
			
			if ((Scape[x][y].Art == 1) && (Scape[x][y].Typ == 0))	//Meer
				ddbltfx.dwFillColor = RGB2DWORD(228,207,182);
			else
			{
				if ((Scape[x][y].Typ == 0) && 
					((Scape[x][y].Art == 2) ||
					 (Scape[x][y].Art == 3)))	//Strand
					ddbltfx.dwFillColor = RGB2DWORD(112,103,93);
				else
					//Land
					ddbltfx.dwFillColor = RGB2DWORD(139+Scape[x][y].Hoehe*20,128+Scape[x][y].Hoehe*20,115+Scape[x][y].Hoehe*20);
			}
			lpDDSKarte->Blt(&rcRectdes, null,null,DDBLT_COLORFILL, &ddbltfx);
		}
		
}

void Zeige()
{
	HRESULT				ddrval;
	short				i;
	char Stringsave1[128],Stringsave2[128]; //F�r die Zeitausgabe
	
	rcRectsrc.left		= Camera.x+rcSpielflaeche.left;
	rcRectsrc.top		= Camera.y+rcSpielflaeche.top;
	rcRectsrc.right		= Camera.x+rcSpielflaeche.right;
	rcRectsrc.bottom	= Camera.y+rcSpielflaeche.bottom;
	rcRectdes.left		= rcSpielflaeche.left;
	rcRectdes.top		= rcSpielflaeche.top;
	rcRectdes.right		= rcSpielflaeche.right;
	rcRectdes.bottom	= rcSpielflaeche.bottom;
	
	Blitten(lpDDSScape,lpDDSBack,false); //Landschaft zeichnen
	
	ZeichneObjekte();
		
	ZeichnePanel();
	
	//Die TagesZeit ausgeben
	Textloeschen(TXTTAGESZEIT);
	TextBereich[TXTTAGESZEIT].Aktiv = true;
	sprintf(Stringsave1, "%d", Stunden+6);
	sprintf(Stringsave2, "%d", Minuten);
	strcpy(StdString, "");
	if (Stunden+6 < 10) strcat( StdString, "0"); 
	strcat( StdString, Stringsave1);
	strcat( StdString, ":" );
	if (Minuten < 10) strcat( StdString, "0"); 
	strcat( StdString, Stringsave2);
	DrawString(StdString,(short)(TextBereich[TXTTAGESZEIT].rcText.left),
		(short)(TextBereich[TXTTAGESZEIT].rcText.top),2);
	
	if (PapierText != -1) ZeichnePapier();
	
	//Die Textsurface blitten
	for (i=0;i<TEXTANZ;i++)
	{
		if (!TextBereich[i].Aktiv) continue; //Die nicht aktiven Felder auslassen
		rcRectsrc	= 	TextBereich[i].rcText;
		rcRectdes   = 	TextBereich[i].rcText;
		Blitten(lpDDSSchrift,lpDDSBack,true);
	}
	//Alles schwarz �bermalen und nur das Papier mit Text anzeigen
	if (Nacht)
	{
		rcRectdes.left = 0;
		rcRectdes.top = 0;
		rcRectdes.right = MAXX;
		rcRectdes.bottom = MAXY;
		ddbltfx.dwFillColor = RGB2DWORD(0,0,0);
		lpDDSBack->Blt(&rcRectdes, null,null,DDBLT_COLORFILL, &ddbltfx);
		
		if (PapierText != -1) 
		{	
			ZeichnePapier();
			rcRectsrc	= 	TextBereich[TXTPAPIER].rcText;
			rcRectdes   = 	TextBereich[TXTPAPIER].rcText;
			Blitten(lpDDSSchrift,lpDDSBack,true);
		}
		Fade(100,100,100);
	}

	//Cursor
	if (CursorTyp == CUPFEIL) ZeichneBilder(MousePosition.x, MousePosition.y,
											CursorTyp, rcGesamt, false,-1);
	else ZeichneBilder(MousePosition.x-Bmp[CursorTyp].Breite/2, 
					   MousePosition.y-Bmp[CursorTyp].Hoehe/2, 
					   CursorTyp, rcGesamt, false,-1);
 	//Flippen
	while(1) 
	{ 
		ddrval = lpDDSPrimary->Flip(null, 0);
		if(ddrval == DD_OK) 
		{ 
			break; 
		} 
		if(ddrval == DDERR_SURFACELOST) 
		{ 
			ddrval = lpDDSPrimary->Restore(); 
			if(ddrval != DD_OK) 
			{ 
				break; 
			} 
		} 
		if(ddrval != DDERR_WASSTILLDRAWING) 
		{ 
			break; 
		} 
	} 
	

	if (Nacht) Fade(100,100,100); //Das mu� hier stehen, damit man die Textnachricht in der Nacht lesen kann
	
}

void ZeigeIntro()
{
	HRESULT				ddrval;
	short				i,z;
	
	rcRectdes.left = 0;
	rcRectdes.top  = 0;
	rcRectdes.right= MAXX;
	rcRectdes.bottom = MAXY;
	ddbltfx.dwFillColor = RGB2DWORD(0,0,0);
	z=0;
	while(1)
	{
		z++;
		ddrval = lpDDSBack->Blt(&rcRectdes,null,null,DDBLT_COLORFILL | DDBLT_WAIT, &ddbltfx);
		if (ddrval!=DDERR_WASSTILLDRAWING) break;
		if (z==1000) 
		{
			MessageBeep(MB_OK);
			break;
		}
	}

	rcRectsrc.left		= Camera.x+rcSpielflaeche.left;
	rcRectsrc.top		= Camera.y+rcSpielflaeche.top;
	rcRectsrc.right		= Camera.x+rcSpielflaeche.right;
	rcRectsrc.bottom	= Camera.y+rcSpielflaeche.bottom;
	rcRectdes.left		= rcSpielflaeche.left;
	rcRectdes.top		= rcSpielflaeche.top;
	rcRectdes.right		= rcSpielflaeche.right;
	rcRectdes.bottom	= rcSpielflaeche.bottom;
	
	Blitten(lpDDSScape,lpDDSBack,false); //Landschaft zeichnen
	
	ZeichneObjekte();
	
	if (PapierText != -1) ZeichnePapier();
	
	//Die Textsurface blitten
	for (i=0;i<TEXTANZ;i++)
	{
		if (!TextBereich[i].Aktiv) continue; //Die nicht aktiven Felder auslassen
		rcRectsrc	= 	TextBereich[i].rcText;
		rcRectdes   = 	TextBereich[i].rcText;
		Blitten(lpDDSSchrift,lpDDSBack,true);
	}
	
	//Flippen
	while(1) 
	{ 
		ddrval = lpDDSPrimary->Flip(null, 0);
		if(ddrval == DD_OK) 
		{ 
			break; 
		} 
		if(ddrval == DDERR_SURFACELOST) 
		{ 
			ddrval = lpDDSPrimary->Restore(); 
			if(ddrval != DD_OK) 
			{ 
				break; 
			} 
		} 
		if(ddrval != DDERR_WASSTILLDRAWING) 
		{ 
			break; 
		} 
	} 
	
}

void ZeigeAbspann()
{
	HRESULT				ddrval;
	short				z;
	
	PlaySound(WAVABSPANN,100);

	rcRectdes.left = 0;
	rcRectdes.top = 0;
	rcRectdes.right = MAXX;
	rcRectdes.bottom = MAXY;
	ddbltfx.dwFillColor = RGB2DWORD(0,0,0);
	z=0;
	while(1)
	{
		z++;
		ddrval = lpDDSBack->Blt(&rcRectdes,null,null,DDBLT_COLORFILL | DDBLT_WAIT, &ddbltfx);
		if (ddrval!=DDERR_WASSTILLDRAWING) break;
		if (z==1000) 
		{
			MessageBeep(MB_OK);
			break;
		}
	}
	if (AbspannZustand == 0)
	{
		ZeichneBilder((short)MAXX/2-Bmp[AbspannListe[AbspannNr][0].Bild].Breite/2,100,
			AbspannListe[AbspannNr][0].Bild,rcGesamt,false,-1);
		for(z=1;z<10;z++)
		{
			if (AbspannListe[AbspannNr][z].Aktiv)
				AbspannBlt(AbspannListe[AbspannNr][z].Bild,
				(short)(100*sin(pi/MAXY*(Bmp[AbspannListe[AbspannNr][z].Bild].rcDes.top+
				Bmp[AbspannListe[AbspannNr][z].Aktiv].Hoehe/2))));
		}
	}
	else if (AbspannZustand == 1)
	{
		rcRectsrc = Bmp[AbspannNr].rcSrc;
		rcRectsrc.top += Bmp[AbspannNr].Phase*Bmp[AbspannNr].Hoehe;
		rcRectsrc.bottom = rcRectsrc.top+Bmp[AbspannNr].Hoehe;
		
		rcRectdes.left = 2;
		rcRectdes.top = 2;
		rcRectdes.right = Bmp[AbspannNr].Breite+2;
		rcRectdes.bottom = Bmp[AbspannNr].Hoehe+2;

		Blitten(Bmp[AbspannNr].Surface,lpDDSBack,true);

		rcRectsrc.left = 0;
		rcRectsrc.top = 0;
		rcRectsrc.right = Bmp[AbspannNr].Breite+4;
		rcRectsrc.bottom = Bmp[AbspannNr].Hoehe+4;

		rcRectdes.left = (short)MAXX/2-rcRectsrc.right*10/2;
		rcRectdes.top = (short)MAXY/2-rcRectsrc.bottom*10/2;
		rcRectdes.right = rcRectdes.left+rcRectsrc.right*10;
		rcRectdes.bottom = rcRectdes.top+rcRectsrc.bottom*10;
		
		Blitten(lpDDSBack,lpDDSBack,false);

		rcRectsrc.left = 100;
		rcRectsrc.top = 2;
		rcRectsrc.right = 100+Bmp[AbspannNr].Breite+2;
		rcRectsrc.bottom = Bmp[AbspannNr].Hoehe+2;

		rcRectdes.left = 2;
		rcRectdes.top = 2;
		rcRectdes.right = Bmp[AbspannNr].Breite+2;
		rcRectdes.bottom = Bmp[AbspannNr].Hoehe+2;

		Blitten(lpDDSBack,lpDDSBack,false);
	}
	//Flippen
	while(1) 
	{ 
		ddrval = lpDDSPrimary->Flip(null, 0);
		if(ddrval == DD_OK) 
		{ 
			break; 
		} 
		if(ddrval == DDERR_SURFACELOST) 
		{ 
			ddrval = lpDDSPrimary->Restore(); 
			if(ddrval != DD_OK) 
			{ 
				break; 
			} 
		} 
		if(ddrval != DDERR_WASSTILLDRAWING) 
		{ 
			break; 
		} 
	} 
}

void ZeigeLogo()
{
	HRESULT				ddrval;
	short				z;
	
	rcRectdes.left = 0;
	rcRectdes.top = 0;
	rcRectdes.right = MAXX;
	rcRectdes.bottom = MAXY;
	ddbltfx.dwFillColor = RGB2DWORD(0,0,0);
	z=0;
	while(1)
	{
		z++;
		ddrval = lpDDSBack->Blt(&rcRectdes,null,null,DDBLT_COLORFILL | DDBLT_WAIT, &ddbltfx);
		if (ddrval!=DDERR_WASSTILLDRAWING) break;
		if (z==1000) 
		{
			MessageBeep(MB_OK);
			break;
		}
	}
	
	rcRectsrc.left = 0;
	rcRectsrc.right = 500;
	rcRectsrc.top  = 0;
	rcRectsrc.bottom = 500;
	rcRectdes.left	= MAXX/2-250;
	rcRectdes.right = MAXX/2+250;
	rcRectdes.top   = MAXY/2-250;
	rcRectdes.bottom= MAXY/2+250;


	Blitten(lpDDSLogo,lpDDSBack,false);
	
	PlaySound(WAVLOGO,100);

	//Flippen
	while(1) 
	{ 
		ddrval = lpDDSPrimary->Flip(null, 0);
		if(ddrval == DD_OK) 
		{ 
			break; 
		} 
		if(ddrval == DDERR_SURFACELOST) 
		{ 
			ddrval = lpDDSPrimary->Restore(); 
			if(ddrval != DD_OK) 
			{ 
				break; 
			} 
		} 
		if(ddrval != DDERR_WASSTILLDRAWING) 
		{ 
			break; 
		} 
	} 
}

void AbspannBlt(short Bild, short Prozent)
{
	short				x,y;
	RGBSTRUCT			rgbalt;

	Bmp[Bild].Surface->Lock(null,&ddsd,DDLOCK_WAIT,null);
	lpDDSBack->Lock(null,&ddsd2,DDLOCK_WAIT,null);
	
	for (x=0;x<Bmp[Bild].Breite;x++)
		for (y=0;y<Bmp[Bild].Hoehe;y++)
		{
			if ((x+Bmp[Bild].rcDes.left>=MAXX) || (x+Bmp[Bild].rcDes.left<=0) || 
				(y+Bmp[Bild].rcDes.top>=MAXY) || (y+Bmp[Bild].rcDes.top<=0)) continue;
			GetPixel((short)(x+Bmp[Bild].rcDes.left),
					 (short)(y+Bmp[Bild].rcDes.top),&ddsd2);
			rgbalt = rgbStruct;
			GetPixel((short)(x+Bmp[Bild].rcSrc.left),
					 (short)(y+Bmp[Bild].rcSrc.top),&ddsd);
			if ((rgbStruct.r == 0) && (rgbStruct.g == 0) && (rgbStruct.b == 0)) continue;
			PutPixel((short)(x+Bmp[Bild].rcDes.left),
					 (short)(y+Bmp[Bild].rcDes.top),
				RGB2DWORD(rgbalt.r+(rgbStruct.r-rgbalt.r)*Prozent/100,
						  rgbalt.g+(rgbStruct.g-rgbalt.g)*Prozent/100,
						  rgbalt.b+(rgbStruct.b-rgbalt.b)*Prozent/100), 
				&ddsd2);
		}
		
	Bmp[Bild].Surface->Unlock(null);
	lpDDSBack->Unlock(null);
		
}

void AbspannCalc()
{
	short i,k;
	
	if (AbspannZustand == 0)
	{
		for (k=1;k<10;k++)
		{
			if (AbspannListe[AbspannNr][k].Bild == -1) break;
			if (!AbspannListe[AbspannNr][k].Aktiv) continue;
			i = 150/LastBild;
			Bmp[AbspannListe[AbspannNr][k].Bild].rcDes.top -= i;
			
			if (Bmp[AbspannListe[AbspannNr][k].Bild].rcDes.top<MAXY-400)
			{
				if ((!AbspannListe[AbspannNr][k+1].Aktiv) &&
					(AbspannListe[AbspannNr][k+1].Bild !=-1)) 
					AbspannListe[AbspannNr][k+1].Aktiv = true;
			}	
			if (Bmp[AbspannListe[AbspannNr][k].Bild].rcDes.top<0) 
			{
				AbspannListe[AbspannNr][k].Aktiv = false;
				Bmp[AbspannListe[AbspannNr][k].Bild].rcDes.top = MAXY-Bmp[AbspannListe[AbspannNr][k].Bild].Hoehe/2;
				if (!AbspannListe[AbspannNr][k+1].Aktiv) 
				{
					if (AbspannListe[AbspannNr+1][0].Bild != -1)
					{
						AbspannNr++;
						AbspannListe[AbspannNr][1].Aktiv = true;
					}
					else 
					{
						AbspannNr = GUYLINKS;
						AbspannZustand = 1;
					}
				}
			}
		}
	}
	else if (AbspannZustand == 1)
	{
		i = LastBild/Bmp[AbspannNr].Geschwindigkeit;
		if (i<1) i = 1;
		if (Bild%i == 0)
		{
			Bmp[AbspannNr].Phase++;
			if (Bmp[AbspannNr].Phase>=Bmp[AbspannNr].Anzahl) 
			{
				Bmp[AbspannNr].Phase = 0;
				AbspannNr++;
				if (AbspannNr > GUYSCHLEUDER) AbspannNr = GUYLINKS;
			}
		}
	}
}

void ZeichneBilder(short x, short y, short i, RECT Ziel, bool Reverse, short Frucht)
{
	short Phase;

	if (Frucht == -1) Phase = Bmp[i].Phase; else Phase = Frucht;
	rcRectsrc = Bmp[i].rcSrc;
	if (!Reverse)
	{
	   rcRectsrc.top += Phase*(Bmp[i].Hoehe);
	}
	else
	{
		rcRectsrc.top = Bmp[i].rcSrc.top+(Bmp[i].Anzahl-1)*Bmp[i].Hoehe-Phase*Bmp[i].Hoehe;
	}
	rcRectsrc.bottom = rcRectsrc.top + (Bmp[i].Hoehe);
	rcRectdes.left = x;
	rcRectdes.top  = y;
	rcRectdes.right= x + (Bmp[i].Breite);
	rcRectdes.bottom=y + (Bmp[i].Hoehe);
	CalcRect(Ziel);
	Blitten(Bmp[i].Surface,lpDDSBack,true);
}

void ZeichneObjekte()
{
	short				x,y;
	bool				Guyzeichnen;

	for (y=0;y<MAXYKACH;y++)
		for (x=0;x<MAXXKACH;x++)
		{
			Guyzeichnen = false;
			if ((Guy.Pos.x == x) && (Guy.Pos.y == y)) Guyzeichnen = true;
			//Die nichtsichbaren Kacheln (oder nicht betroffenen) ausfiltern
			
			if (!((Scape[x][y].xScreen > Camera.x+rcSpielflaeche.left-KXPIXEL) &&
				(Scape[x][y].xScreen < Camera.x+rcSpielflaeche.right+KXPIXEL) &&
				(Scape[x][y].yScreen > Camera.y+rcSpielflaeche.top-KYPIXEL) &&
				(Scape[x][y].yScreen < Camera.y+rcSpielflaeche.bottom+KYPIXEL) &&
				(Scape[x][y].Entdeckt)	&&
				((Scape[x][y].Markiert) || (Scape[x][y].Objekt != -1) || (Guyzeichnen)))) continue;
			
			if (Scape[x][y].Markiert) //Die Rahmen um die markierten Kacheln malen
			{
				rcRectsrc.left		= KXPIXEL * Scape[x][y].Typ;
				rcRectsrc.right		= KXPIXEL * Scape[x][y].Typ+KXPIXEL;
				rcRectsrc.top		= 2*KYPIXEL;
				rcRectsrc.bottom	= 3*KYPIXEL;
				rcRectdes.left		= Scape[x][y].xScreen-Camera.x;
				rcRectdes.right		= rcRectdes.left+KXPIXEL;
				rcRectdes.top		= Scape[x][y].yScreen-Camera.y;
				rcRectdes.bottom	= rcRectdes.top+KYPIXEL;
				CalcRect(rcSpielflaeche);
				Blitten(lpDDSMisc,lpDDSBack,true);
			}
			//Landschaftsanimationen malen (und Feld)
			if ((Scape[x][y].Objekt != -1) && (LAnimation) && 
				((Scape[x][y].Objekt <= SCHLEUSE6)) 
				 || (Scape[x][y].Objekt == FELD)   //Der Guy ist immer vor diesen Objekten
				 || (Scape[x][y].Objekt == ROHR)
				 || (Scape[x][y].Objekt == SOS))
			{
				//Sound abspielen
				if (((Guy.Pos.x -1 <= x) && (x <= Guy.Pos.x +1)) &&
					((Guy.Pos.y -1 <= y) && (y <= Guy.Pos.y +1)))
				{
					if ((x == Guy.Pos.x) && (y == Guy.Pos.y))
						PlaySound(Bmp[Scape[x][y].Objekt].Sound,100);
					else if (Bmp[Scape[x][y].Objekt].Sound != Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Sound)		
						PlaySound(Bmp[Scape[x][y].Objekt].Sound,90);
				}
				
				ZeichneBilder(Scape[x][y].xScreen+Scape[x][y].ObPos.x-Camera.x,
					Scape[x][y].yScreen+Scape[x][y].ObPos.y-Camera.y,
					Scape[x][y].Objekt, rcSpielflaeche, Scape[x][y].Reverse,
							  (short)Scape[x][y].Phase);
			}
			else 
			{
			
				if (((Scape[x][y].Objekt >= BAUM1) && (Scape[x][y].Objekt <=BAUM4DOWN)) ||
					(Scape[x][y].Objekt == BAUMGROSS) || (Scape[x][y].Objekt == FEUER) ||
					(Scape[x][y].Objekt == WRACK) || (Scape[x][y].Objekt == WRACK2) ||
					(Scape[x][y].Objekt >= ZELT)) //B�ume und Fr�chte (und alle anderen Objekte) malen
				{
					//Sound abspielen
					if (((Guy.Pos.x -1 <= x) && (x <= Guy.Pos.x +1)) &&
						((Guy.Pos.y -1 <= y) && (y <= Guy.Pos.y +1)))
					{
						if ((x == Guy.Pos.x) && (y == Guy.Pos.y))
							PlaySound(Bmp[Scape[x][y].Objekt].Sound,100);
						else if (Bmp[Scape[x][y].Objekt].Sound != Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Sound)	
							PlaySound(Bmp[Scape[x][y].Objekt].Sound,90);
					}
					if (Guyzeichnen)
					{
						if ((Guy.PosScreen.y) < (Scape[x][y].yScreen+Scape[x][y].ObPos.y
							+Bmp[Scape[x][y].Objekt].Hoehe))
						{
							ZeichneGuy();
							Guyzeichnen = false;
						}
					}
					
					ZeichneBilder(Scape[x][y].xScreen+Scape[x][y].ObPos.x-Camera.x,
								  Scape[x][y].yScreen+Scape[x][y].ObPos.y-Camera.y,
								  Scape[x][y].Objekt, rcSpielflaeche, false,
								  (short)Scape[x][y].Phase);
				}
			}
			if (Guyzeichnen) ZeichneGuy();
	}
}

void ZeichneGuy()
{
	if (BootsFahrt)
	{
		if (Guy.Zustand == GUYSCHIFF)
		{
			ZeichneBilder(Guy.PosScreen.x-30-Camera.x,
				Guy.PosScreen.y-28-Camera.y,
				Guy.Zustand, rcSpielflaeche, false,-1);
		}
		else
		{
			ZeichneBilder(Guy.PosScreen.x-(Bmp[Guy.Zustand].Breite)/2-Camera.x,
				Guy.PosScreen.y-(Bmp[Guy.Zustand].Hoehe )/2-Camera.y,
				Guy.Zustand, rcSpielflaeche, false,-1);
		}
	}
	else ZeichneBilder(Guy.PosScreen.x-(Bmp[Guy.Zustand].Breite)/2-Camera.x,
					   Guy.PosScreen.y-(Bmp[Guy.Zustand].Hoehe )  -Camera.y,
					   Guy.Zustand, rcSpielflaeche, false,-1);
	//Sound abspielen
	if (Guy.Aktiv) PlaySound(Bmp[Guy.Zustand].Sound,100);
}

void ZeichnePapier()
{
	rcRectsrc.left		= 0;
	rcRectsrc.top		= 0;
	rcRectsrc.right		= 464;
	rcRectsrc.bottom	= 77;
	rcRectdes.left		= TextBereich[TXTPAPIER].rcText.left-60;
	rcRectdes.top		= TextBereich[TXTPAPIER].rcText.top-30;
	rcRectdes.right		= rcRectdes.left+464;
	rcRectdes.bottom	= rcRectdes.top+77;
	Blitten(lpDDSPapier,lpDDSBack,true);
	rcRectdes.left		= rcRectdes.left+34;
	rcRectdes.top		= rcRectdes.top+77;
	rcRectdes.right		= rcRectdes.right;
	rcRectdes.bottom	= TextBereich[TXTPAPIER].rcText.top+PapierText;
	ddbltfx.dwFillColor = RGB2DWORD(236,215,179);
	lpDDSBack->Blt(&rcRectdes, null,null,DDBLT_COLORFILL, &ddbltfx);
	rcRectsrc.left		= 0;
	rcRectsrc.top		= 77;
	rcRectsrc.right		= 464;
	rcRectsrc.bottom	= 154;
	rcRectdes.left		= TextBereich[TXTPAPIER].rcText.left-60;
	rcRectdes.top		= rcRectdes.bottom-47;
	rcRectdes.right		= rcRectdes.left+464;
	rcRectdes.bottom	= rcRectdes.top+77;
	Blitten(lpDDSPapier,lpDDSBack,true);
}

void ZeichnePanel()
{
	short diffx,diffy,TagesZeit,i,j,Ringtmp;	//f�r die Sonnenanzeige
	
	//Karte
	rcRectsrc.left		= 0;		
	rcRectsrc.top		= 0;
	rcRectsrc.right		= 2*MAXXKACH;
	rcRectsrc.bottom	= 2*MAXYKACH;
	rcRectdes.left		= rcKarte.left;
	rcRectdes.top		= rcKarte.top;
	rcRectdes.right		= rcKarte.right;
	rcRectdes.bottom	= rcKarte.bottom;
	Blitten(lpDDSKarte,lpDDSBack,false);

	//Spielfigur
	rcRectdes.left		= rcKarte.left+2*Guy.Pos.x;
	rcRectdes.top		= rcKarte.top+2*Guy.Pos.y;
	rcRectdes.right     = rcRectdes.left+2;
	rcRectdes.bottom	= rcRectdes.top+2;
	ddbltfx.dwFillColor = RGB2DWORD(255,0,0);
	lpDDSBack->Blt(&rcRectdes, null,null,DDBLT_COLORFILL, &ddbltfx);
	
	//Position einmalen
	rcRectsrc.left		= 205;		
	rcRectsrc.top		= 0;
	rcRectsrc.right		= 205+65;
	rcRectsrc.bottom	= 0+65;
	rcRectdes.left		= rcKarte.left	+ (Camera.x+2*Camera.y)/(KXPIXEL/2) -MAXXKACH		-2;
	rcRectdes.top		= rcKarte.top   + (2*Camera.y-Camera.x)/(KXPIXEL/2) +MAXYKACH-21	-2;
	rcRectdes.right     = rcRectdes.left+65;
	rcRectdes.bottom	= rcRectdes.top +65;
	CalcRect(rcKarte);
	Blitten(lpDDSPanel,lpDDSBack,true);
		
	//Panel malen
	rcRectsrc.left		= 0;		
	rcRectsrc.top		= 0;
	rcRectsrc.right		= 205;
	rcRectsrc.bottom	= 600;
	rcRectdes.left		= rcPanel.left;
	rcRectdes.top		= rcPanel.top;
	rcRectdes.right		= rcPanel.right;
	rcRectdes.bottom	= rcPanel.bottom;
	Blitten(lpDDSPanel,lpDDSBack,true);

	//Gitternetzknopf
	if (Gitter) Bmp[BUTTGITTER].Phase = 1; else Bmp[BUTTGITTER].Phase = 0;
	ZeichneBilder((short)Bmp[BUTTGITTER].rcDes.left,
				  (short)Bmp[BUTTGITTER].rcDes.top,
				  BUTTGITTER, rcPanel, false,-1);

	//SOUNDknopf
	if ((Soundzustand == 0) || (Soundzustand == -1)) Bmp[BUTTSOUND].Phase = 1; else Bmp[BUTTSOUND].Phase = 0;
	ZeichneBilder((short)Bmp[BUTTSOUND].rcDes.left,
				  (short)Bmp[BUTTSOUND].rcDes.top,
				  BUTTSOUND, rcPanel, false,-1);

	//ANIMATIONknopf
	if (!LAnimation) Bmp[BUTTANIMATION].Phase = 1; else Bmp[BUTTANIMATION].Phase = 0;
	ZeichneBilder((short)Bmp[BUTTANIMATION].rcDes.left,
				  (short)Bmp[BUTTANIMATION].rcDes.top,
				  BUTTANIMATION, rcPanel, false,-1);

	//BEENDENknopf
	ZeichneBilder((short)Bmp[BUTTBEENDEN].rcDes.left,
				  (short)Bmp[BUTTBEENDEN].rcDes.top,
				  BUTTBEENDEN, rcPanel, false,-1);

	//NEUknopf
	ZeichneBilder((short)Bmp[BUTTNEU].rcDes.left,
				  (short)Bmp[BUTTNEU].rcDes.top,
				  BUTTNEU, rcPanel, false,-1);
	
	//TAGNEUknopf
	ZeichneBilder((short)Bmp[BUTTTAGNEU].rcDes.left,
				  (short)Bmp[BUTTTAGNEU].rcDes.top,
				  BUTTTAGNEU, rcPanel, false,-1);

	//Aktionsknopf
	if (HauptMenue == MEAKTION) Bmp[BUTTAKTION].Phase = Bmp[BUTTAKTION].Anzahl;
	else if (Bmp[BUTTAKTION].Phase == Bmp[BUTTAKTION].Anzahl) Bmp[BUTTAKTION].Phase = 0;
	ZeichneBilder((short)Bmp[BUTTAKTION].rcDes.left,
				  (short)Bmp[BUTTAKTION].rcDes.top,
				  BUTTAKTION, rcPanel, false,-1);
	
	//BauKnopf
	if (HauptMenue == MEBAUEN) Bmp[BUTTBAUEN].Phase = Bmp[BUTTBAUEN].Anzahl;
	else if (Bmp[BUTTBAUEN].Phase == Bmp[BUTTBAUEN].Anzahl) Bmp[BUTTBAUEN].Phase = 0;
	ZeichneBilder((short)Bmp[BUTTBAUEN].rcDes.left,
				  (short)Bmp[BUTTBAUEN].rcDes.top,
				  BUTTBAUEN, rcPanel, false,-1);

	//Inventarknopf
	if (HauptMenue == MEINVENTAR) Bmp[BUTTINVENTAR].Phase = Bmp[BUTTINVENTAR].Anzahl; 
	else if (Bmp[BUTTINVENTAR].Phase == Bmp[BUTTINVENTAR].Anzahl) Bmp[BUTTINVENTAR].Phase = 0;
	ZeichneBilder((short)Bmp[BUTTINVENTAR].rcDes.left,
				  (short)Bmp[BUTTINVENTAR].rcDes.top,
				  BUTTINVENTAR, rcPanel, false,-1);

	//WEITERknopf
	if (Bmp[BUTTWEITER].Phase != -1) ZeichneBilder((short)Bmp[BUTTWEITER].rcDes.left,
												   (short)Bmp[BUTTWEITER].rcDes.top,
													BUTTWEITER, rcPanel, false,-1);

	//STOPknopf
	if (Bmp[BUTTSTOP].Phase != -1) ZeichneBilder((short)Bmp[BUTTSTOP].rcDes.left,
												   (short)Bmp[BUTTSTOP].rcDes.top,
													BUTTSTOP, rcPanel, false,-1);
	
	//ABLEGENknopf
	if (Bmp[BUTTABLEGEN].Phase != -1) ZeichneBilder((short)Bmp[BUTTABLEGEN].rcDes.left,
												   (short)Bmp[BUTTABLEGEN].rcDes.top,
													BUTTABLEGEN, rcPanel, false,-1);
	
	//Welches Men� zeichnen?
	switch (HauptMenue)
	{
	case MEAKTION:
		for (i=BUTTSUCHEN;i<=BUTTSCHLEUDER;i++)
		{
			if (Bmp[i].Phase == -1) 
			{
				ZeichneBilder((short)Bmp[i].rcDes.left,
					(short)Bmp[i].rcDes.top,
					BUTTFRAGEZ, rcPanel, false,-1);
				continue;
			}
			ZeichneBilder((short)Bmp[i].rcDes.left,
				(short)Bmp[i].rcDes.top,
				i, rcPanel, false,-1);
		}
		break;
	case MEBAUEN:
		for (i=BUTTZELT;i<=BUTTDESTROY;i++)
		{
			if (Bmp[i].Phase == -1) 
			{
				ZeichneBilder((short)Bmp[i].rcDes.left,
					(short)Bmp[i].rcDes.top,
					BUTTFRAGEZ, rcPanel, false,-1);
				continue;
			}
			ZeichneBilder((short)Bmp[i].rcDes.left,
				(short)Bmp[i].rcDes.top,
				i, rcPanel, false,-1);
		}
		break;
	case MEINVENTAR:
		ZeichneBilder((short)Bmp[INVPAPIER].rcDes.left,
				(short)Bmp[INVPAPIER].rcDes.top,
				INVPAPIER, rcPanel, false,-1);
		for (i=ROHAST;i<=ROHSCHLEUDER;i++)
		{
			if (Guy.Inventar[i] <= 0) continue;
			ZeichneBilder((short)Bmp[i].rcDes.left,
				(short)Bmp[i].rcDes.top,
				i, rcPanel, false,-1);
			Bmp[ROEMISCH1].rcDes.top    = Bmp[i].rcDes.top;
			Bmp[ROEMISCH2].rcDes.top    = Bmp[i].rcDes.top;
			for(j=1;j<=Guy.Inventar[i];j++)
			{
				if (j<5)
				{
					ZeichneBilder((short)Bmp[i].rcDes.left+20+j*4,
						(short)Bmp[ROEMISCH1].rcDes.top,
						ROEMISCH1, rcPanel, false,-1);
				}
				else if (j==5) ZeichneBilder((short)Bmp[i].rcDes.left+23,
					(short)Bmp[ROEMISCH2].rcDes.top,
					ROEMISCH2, rcPanel, false,-1);
				else if ((j>5)&&(j<10))
				{
					ZeichneBilder((short)Bmp[i].rcDes.left+20+j*4,
						(short)Bmp[ROEMISCH1].rcDes.top,
						ROEMISCH1, rcPanel, false,-1);
				}
				else if (j==10)
					ZeichneBilder((short)Bmp[i].rcDes.left+43,
					(short)Bmp[ROEMISCH2].rcDes.top,
					ROEMISCH2, rcPanel, false,-1);
			}
		}
		break;

	}

	//S�ule1
	i = Bmp[SAEULE1].Hoehe-(short)Guy.Resource[WASSER]*Bmp[SAEULE1].Hoehe/100;
	rcRectsrc = Bmp[SAEULE1].rcSrc;
	rcRectsrc.top += i;
	rcRectdes = Bmp[SAEULE1].rcDes;
	rcRectdes.top += i;
	Blitten(Bmp[SAEULE1].Surface,lpDDSBack,true);

	//S�ule2
	i = Bmp[SAEULE2].Hoehe-(short)Guy.Resource[NAHRUNG]*Bmp[SAEULE2].Hoehe/100;
	rcRectsrc = Bmp[SAEULE2].rcSrc;
	rcRectsrc.top += i;
	rcRectdes = Bmp[SAEULE2].rcDes;
	rcRectdes.top += i;
	Blitten(Bmp[SAEULE2].Surface,lpDDSBack,true);
	
	//S�ule3
	i = Bmp[SAEULE3].Hoehe-(short)Guy.Resource[GESUNDHEIT]*Bmp[SAEULE3].Hoehe/100;
	rcRectsrc = Bmp[SAEULE3].rcSrc;
	rcRectsrc.top += i;
	rcRectdes = Bmp[SAEULE3].rcDes;
	rcRectdes.top += i;
	Blitten(Bmp[SAEULE3].Surface,lpDDSBack,true);
	
	//Sonnenanzeige
	diffx = ((short)Bmp[SONNE].rcDes.right-(short)Bmp[SONNE].rcDes.left-Bmp[SONNE].Breite)/2;
	diffy = (short)Bmp[SONNE].rcDes.bottom-(short)Bmp[SONNE].rcDes.top-Bmp[SONNE].Hoehe/2;
	TagesZeit = (Stunden*10+Minuten*10/60);
	
	ZeichneBilder((short)(Bmp[SONNE].rcDes.left+diffx * cos(pi-pi*TagesZeit/120)+diffx),
				  (short)(Bmp[SONNE].rcDes.top+(-diffy * sin(pi-pi*TagesZeit/120)+diffy)),
				  SONNE, Bmp[SONNE].rcDes, false,-1);
	
	//Rettungsring 
	if (Chance < 100) Ringtmp = (short)(100*sin(pi/200*Chance));
	else Ringtmp = 100;
	if (Ringtmp > 100) Ringtmp = 100;
	ZeichneBilder((short)(Bmp[RING].rcDes.left),
		          (short)(Bmp[RING].rcDes.top+Ringtmp),
				  RING, rcPanel, false,-1);
	
	//Die ChanceZahl ausgeben
	Textloeschen(TXTCHANCE);
	TextBereich[TXTCHANCE].Aktiv = true;
	TextBereich[TXTCHANCE].rcText.top	= Bmp[RING].rcDes.top+Ringtmp+Bmp[RING].Hoehe;
	TextBereich[TXTCHANCE].rcText.bottom= TextBereich[TXTCHANCE].rcText.top +  S2YPIXEL;
	sprintf(StdString, "%.1f", Chance);
	DrawString(StdString,(short)(TextBereich[TXTCHANCE].rcText.left),
		(short)(TextBereich[TXTCHANCE].rcText.top),2);

	//TextFeld malen
	rcRectsrc.left		= 0;
	rcRectsrc.top		= 0;
	rcRectsrc.right		= 605;
	rcRectsrc.bottom	= 20;
	rcRectdes	= rcTextFeld1;
	Blitten(lpDDSTextFeld,lpDDSBack,false);
}

void DrawString(char *string, short x, short y, short Art)
{
	short length, index, cindex,Breite,Hoehe;
	
	if (Art==1)
	{
		Breite = S1XPIXEL;
		Hoehe  = S1YPIXEL;
	}
	if (Art==2)
	{
		Breite = S2XPIXEL;
		Hoehe  = S2YPIXEL;
	}
	
	// L�nge der Schrift ermitteln
    length = strlen(string);
	
	// Alle Zeichen durchgehen
	for (index=0; index<length; index++)
	{
		//Korrekte indexNummer ermitteln
		cindex = string[index] - ' ';
		
		if ((string[index]>=' ')&& (string[index] <= '/'))
		{
		rcRectsrc.left		= cindex*Breite;		
		rcRectsrc.top		= 0;
		}
		if ((string[index]>='0')&& (string[index] <= '?'))
		{
		rcRectsrc.left		= (cindex-16)*Breite;		
		rcRectsrc.top		= Hoehe;
		}
		if ((string[index]>='@')&& (string[index] <= 'O'))
		{
		rcRectsrc.left		= (cindex-16*2)*Breite;		
		rcRectsrc.top		= 2*Hoehe;
		}
		if ((string[index]>='P')&& (string[index] <= '_'))
		{
		rcRectsrc.left		= (cindex-16*3)*Breite;		
		rcRectsrc.top		= 3*Hoehe;
		}
		if ((string[index]>'_')&& (string[index] <= 'o'))
		{
		rcRectsrc.left		= (cindex-16*4)*Breite;		
		rcRectsrc.top		= 4*Hoehe;
		}
		if ((string[index]>='p')&& (string[index] <= '~'))
		{
		rcRectsrc.left		= (cindex-16*5)*Breite;		
		rcRectsrc.top		= 5*Hoehe;
		}

		rcRectsrc.right		= rcRectsrc.left + Breite;
		rcRectsrc.bottom	= rcRectsrc.top  +Hoehe;
		rcRectdes.left		= x;
		rcRectdes.top		= y;
		rcRectdes.right		= x+Breite;
		rcRectdes.bottom	= y+Hoehe;
		//Zeichen zeichnen
		if (Art == 1) 
		{
			Blitten(lpDDSSchrift1,lpDDSSchrift,true);
			//x Position weiterschieben
			x+=S1ABSTAND;
		}
		if (Art == 2) 
		{
			Blitten(lpDDSSchrift2,lpDDSSchrift,true);
			//x Position weiterschieben
			x+=S2ABSTAND;
		}
	} 
} 

short DrawText(int TEXT,short Bereich, short Art)
{
	short BBreite,BHoehe,Posx,Posy;
	short Pos; char *Posnext, *Posnext2;
	char Text[1024];
	int	blank = ' ';
	int slash = '/';
	int strend = 0x0;
	char scratch;//Zur Variablenausgabe
	char StdString2[10];//Zur Variablenausgabe
	short Anzahl; //Zur Variablenausgabe
	short Erg;

	Textloeschen(Bereich);
	TextBereich[Bereich].Aktiv = true;

	if (Art==1)
	{
		BBreite = S1ABSTAND;
		BHoehe  = S1YPIXEL;
	}
	if (Art==2)
	{
		BBreite = S2ABSTAND;
		BHoehe  = S2YPIXEL;
	}
	LoadString(g_hInst,TEXT,Text,1024); 
	Posx = (short)TextBereich[Bereich].rcText.left;
	Posy = (short)TextBereich[Bereich].rcText.top;
	Pos  = 0;
	Posnext = Text;
	
	while(1)
	{
		strcpy(StdString,"");
		Pos = Posnext-Text;
		Posnext = strchr(Text+Pos+1, blank);
		Posnext2 = strchr(Text+Pos+1, slash);
		if ((Posnext != null) && (Posnext2 != null) && (Posnext2 <= Posnext))
		{
			scratch = *(Posnext2+1);
			switch (scratch)
			{
			case 'a':
				Anzahl = sprintf(StdString2, " %d", Tag);
				DrawString(StdString2,Posx,Posy,Art);
				Posx += BBreite*(Anzahl);
				break;
			case 'b':
				Anzahl = sprintf(StdString2, " %d", (short)Guy.Resource[GESUNDHEIT]);
				DrawString(StdString2,Posx,Posy,Art);
				Posx += BBreite*(Anzahl);
				break;
			case 'c':
				Anzahl = sprintf(StdString2, " %.2f", Chance);
				DrawString(StdString2,Posx,Posy,Art);
				Posx += BBreite*(Anzahl);
				break;
			case 'd':
				Frage = 0;
				rcRectsrc = Bmp[JA].rcSrc;
				rcRectdes.left = (short)TextBereich[Bereich].rcText.left+50;
				rcRectdes.top  = Posy + 50;
				rcRectdes.right = rcRectdes.left + Bmp[JA].Breite;
				rcRectdes.bottom = rcRectdes.top + Bmp[JA].Hoehe;
				Bmp[JA].rcDes = rcRectdes;
				Blitten(Bmp[JA].Surface,lpDDSSchrift,false);
				
				rcRectsrc = Bmp[NEIN].rcSrc;
				rcRectdes.left = (short)TextBereich[Bereich].rcText.left+220;
				rcRectdes.top  = Posy + 50;
				rcRectdes.right = rcRectdes.left + Bmp[NEIN].Breite;
				rcRectdes.bottom = rcRectdes.top + Bmp[NEIN].Hoehe;
				Bmp[NEIN].rcDes = rcRectdes;
				Blitten(Bmp[NEIN].Surface,lpDDSSchrift,false);
				Posy += 115;
				break;
			case 'z':
				Posx = (short)TextBereich[Bereich].rcText.left-BBreite;
				Posy += BHoehe+3;
				break;
			}
			Pos = Pos+3;
			Posnext = Posnext2+2;
		}
		if (Posnext == null) Posnext = strchr(Text+Pos+1, strend);
		strncpy(StdString, Text+Pos, (Posnext-Text)-Pos);
		if (Posx + BBreite*((Posnext-Text)-Pos) > TextBereich[Bereich].rcText.right) 
		{
			Posx = (short)TextBereich[Bereich].rcText.left-BBreite;
			Posy += BHoehe+3;
		}
		StdString[(Posnext-Text)-Pos] = (char)0;
		DrawString(StdString,Posx,Posy,Art);
		if (Posnext[0] == (char)0) break;
		Posx += BBreite*((Posnext-Text)-Pos);
	}
	Erg = (short)(Posy+BHoehe-TextBereich[Bereich].rcText.top);
	if (Erg < 100) Erg = 100;
	return Erg;
}

void Textloeschen(short Bereich)
{
	TextBereich[Bereich].Aktiv = false;
	ddbltfx.dwFillColor = RGB2DWORD(255,0,255);
	lpDDSSchrift->Blt(&TextBereich[Bereich].rcText, null,null,DDBLT_COLORFILL, &ddbltfx);
}

void DrawSchatzkarte()
{
    Textloeschen(TXTPAPIER);
	TextBereich[TXTPAPIER].Aktiv = true;
	PapierText = SKARTEY;
	
	rcRectsrc.left      = 0;
	rcRectsrc.right		= SKARTEX;
	rcRectsrc.top       = 0;
	rcRectsrc.bottom	= SKARTEY;
	rcRectdes.left		= TextBereich[TXTPAPIER].rcText.left;
	rcRectdes.top		= TextBereich[TXTPAPIER].rcText.top;
	rcRectdes.right		= rcRectdes.left+SKARTEX;
	rcRectdes.bottom	= rcRectdes.top+SKARTEY;
	
	Blitten(lpDDSSchatzkarte,lpDDSSchrift,false);
}

void CalcRect(RECT rcBereich)
{	
	if (rcRectdes.left< rcBereich.left)
	{
		rcRectsrc.left = rcRectsrc.left+rcBereich.left-rcRectdes.left;
		rcRectdes.left = rcBereich.left;
	}
	if (rcRectdes.top< rcBereich.top)
	{
		rcRectsrc.top = rcRectsrc.top+rcBereich.top-rcRectdes.top;
		rcRectdes.top = rcBereich.top;
	}
	if (rcRectdes.right> rcBereich.right)
	{
		rcRectsrc.right = rcRectsrc.right+rcBereich.right-rcRectdes.right;
		rcRectdes.right = rcBereich.right;
	}
	if (rcRectdes.bottom> rcBereich.bottom)
	{
		rcRectsrc.bottom = rcRectsrc.bottom+rcBereich.bottom-rcRectdes.bottom;
		rcRectdes.bottom = rcBereich.bottom;
	}
}

void MarkRoute(bool Mark)
{
	short i;

	for (i = 0; i < RouteLaenge; i++) 
	{
		Scape[Route[i].x][Route[i].y].Markiert = Mark;
	}
}

void CheckSpzButton()
{
	if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= FELD) && (Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= FEUERSTELLE) &&
		(Scape[Guy.Pos.x][Guy.Pos.y].Phase >=  Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl) &&
		(Bmp[BUTTSTOP].Phase == -1))
	{	
		if (Bmp[BUTTWEITER].Phase == -1) Bmp[BUTTWEITER].Phase = 0;
	}
	else Bmp[BUTTWEITER].Phase = -1;
		
	if ((Bmp[BUTTSTOP].Phase == -1) && (((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == BOOT) &&
		(Scape[Guy.Pos.x][Guy.Pos.y].Phase <  Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl)) ||
		((BootsFahrt) && 
		 (((Scape[Guy.Pos.x-1][Guy.Pos.y].Art != 1) && (Scape[Guy.Pos.x-1][Guy.Pos.y].Objekt == -1)) ||
		  ((Scape[Guy.Pos.x][Guy.Pos.y-1].Art != 1) && (Scape[Guy.Pos.x][Guy.Pos.y-1].Objekt == -1)) ||
		  ((Scape[Guy.Pos.x+1][Guy.Pos.y].Art != 1) && (Scape[Guy.Pos.x+1][Guy.Pos.y].Objekt == -1)) ||
		  ((Scape[Guy.Pos.x][Guy.Pos.y+1].Art != 1) && (Scape[Guy.Pos.x][Guy.Pos.y+1].Objekt == -1))))))
	{	
		if (Bmp[BUTTABLEGEN].Phase == -1)	Bmp[BUTTABLEGEN].Phase = 0;
	}
	else Bmp[BUTTABLEGEN].Phase = -1;
}

bool CheckRohstoff()
{
	short i;
	short Benoetigt; //Anzahl der Gesamtben�tigten Rohstoffe
	float GebrauchtTmp; //Soviel Rohstoffe werden f�r diesen Schritt ben�tigt
	short Gebraucht; //Soviel Rohstoffe werden f�r diesen Schritt ben�tigt
	bool Check;		 //Wenn kein Rohstoff mehr vorhanden nur noch einmal die While-Schleife

	Benoetigt = 0;
	for (i=0;i<BILDANZ;i++) Benoetigt += Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Rohstoff[i];
		
	GebrauchtTmp = Benoetigt/(float)Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].AkAnzahl;
	Gebraucht = (short)(GebrauchtTmp * Scape[Guy.Pos.x][Guy.Pos.y].AkNummer-
						(short)(GebrauchtTmp * (Scape[Guy.Pos.x][Guy.Pos.y].AkNummer-1)));

	
	while(1)
	{
		Check = false;
		for (i=0;i<BILDANZ;i++)
		{
			if (Gebraucht == 0) return true;
			if ((Scape[Guy.Pos.x][Guy.Pos.y].Rohstoff[i] > 0) &&
				(Guy.Inventar[i] > 0))
			{
				Guy.Inventar[i]--;
				Scape[Guy.Pos.x][Guy.Pos.y].Rohstoff[i]--;
				Gebraucht--;
				if (Gebraucht == 0) return true;
				Check = true;
			}
		}
		if (Check == false) break;
	}
	PapierText = DrawText(ROHSTOFFNICHT,TXTPAPIER,1);
	Guy.AkNummer = 0;
	Guy.Aktion = AKABBRUCH;
	Bmp[BUTTSTOP].Phase = -1;
	return false;
}

void Event(short Eventnr)
{
	if (Eventnr != AKNICHTS)
	{
		MarkRoute(false);
		RouteZiel.x = -1;
		RouteZiel.y = -1;
	}
	switch(Eventnr)
	{
	case AKNICHTS:
		break;
	case AKSUCHEN: 
		AkSuchen();
		break;
	case AKESSEN: 
		AkEssen();
		break;
	case AKTRINKEN: 
		AkTrinken();
		break;
	case AKFAELLEN: 
		AkFaellen();
		break;
	case AKFELD: 
		AkFeld();
		break;
	case AKTAGENDE: 
		AkTagEnde();
		break;
	case AKGERETTET: 
		AkGerettet();
		break;
	case AKZELT: 
		AkZelt();
		break;
	case AKSCHLAFEN: 
		AkSchlafen();
		break;
	case AKABBRUCH:
		AkAbbruch();
		break;
	case AKANGELN:
		AkAngeln();
		break;
	case AKBOOT: 
		AkBoot();
		break;
	case AKABLEGEN: 
		AkAblegen();
		break;
	case AKANLEGEN: 
		AkAnlegen();
		break;
	case AKROHR: 
		AkRohr();
		break;
	case AKDESTROY: 
		AkDestroy();
		break;
	case AKSOS: 
		AkSOS();
		break;
	case AKHAUS1: 
		AkHaus1();
		break;
	case AKHAUS2: 
		AkHaus2();
		break;
	case AKHAUS3: 
		AkHaus3();
		break;
	case AKFEUERSTELLE: 
		AkFeuerstelle();
		break;
	case AKANZUENDEN: 
		AkAnzuenden();
		break;
	case AKAUSSCHAU: 
		AkAusschau();
		break;
	case AKSCHATZ: 
		AkSchatz();
		break;
	case AKINTRO:
		AkIntro();
		break;
	case AKSCHLEUDER:
		AkSchleuder();
		break;
	case AKSPIELVERLASSEN:
		AkSpielverlassen();
		break;
	case AKNEUBEGINNEN:
		AkNeubeginnen();
		break;
	case AKTAGNEUBEGINNEN:
		AkTagNeubeginnen();
		break;
	case AKTOD:
		AkTod();
		break;
	}
}

void AkIntro()
{
	short x;

	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		//Intro Route herstellen
		Guy.Aktiv = true;
		RoutePunkt = -1;
		Steps		= 0;
		Step		= 0;
		RouteStart.x = Guy.Pos.x;
		RouteStart.y = Guy.Pos.y;
		RouteZiel.y  = Guy.Pos.y;
		for (x=Guy.Pos.x;x<MAXXKACH;x++)//Zielkoordinate f�r Introroute finden
		{
			if (Scape[x][Guy.Pos.y].Art != 1) break;
			RouteZiel.x = x-1;
		}
		FindTheWay();
		break;
	case 2:
		Guy.PosScreen.y -= 10;
		Guy.Aktiv   = true;
		Guy.Zustand = GUYSCHIFFDOWN;
		PlaySound(WAVPLATSCH,100);
		PlaySound(WAVCRASH,100);
		break;
	case 3:
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = WRACK;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = (short)Bmp[WRACK].rcDes.left;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = (short)Bmp[WRACK].rcDes.top;

		ChangeBootsFahrt();
		Guy.Pos.x += 2;
		Guy.PosScreen.y += 10;
		Guy.Zustand = GUYSCHWIMMEN;
		ShortRoute(((Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].x +
			         Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].x) /2),
			       ((Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].y +
			         Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].y) /2));
		break;
	case 4:
		StopSound(WAVSCHWIMMEN); //Sound hier sofort stoppen
		Guy.Zustand = GUYLINKS;
		ShortRoute(((Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].x +
			         Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].x) /2),
			       ((Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].y +
			         Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].y) /2));
		break;
	case 5:
		Guy.PosAlt = Guy.PosScreen;
		Spielzustand = SZSPIEL;
		Guy.Aktion = AKNICHTS;
		PapierText = DrawText(INTROTEXT,TXTPAPIER,1);
		SaveGame();
 		break;
	}
}

void AkNeubeginnen()
{
	ZWEID Erg;
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		Erg = GetKachel(Guy.PosAlt.x,Guy.PosAlt.y);
		if ((Erg.x == Guy.Pos.x) && (Erg.y == Guy.Pos.y)) ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		else if (RoutePunkt%2 == 0) ShortRoute(RouteKoor[RoutePunkt].x, RouteKoor[RoutePunkt].y); //Nur bis zur Mitte der aktuellen Kacheln laufen
		else ShortRoute(RouteKoor[RoutePunkt+1].x, RouteKoor[RoutePunkt+1].y);
		TwoClicks = -1; //Keine Ahnung warum ich das hier machen mu�
		break;
	case 2:
	 	Guy.Aktiv = true;
		if (BootsFahrt) Guy.Zustand = GUYBOOTWARTEN;
		else Guy.Zustand = GUYWARTEN;
		PapierText = DrawText(NEUBEGINNEN,TXTPAPIER,1);
		break;
	case 3:
		Guy.Aktion = AKNICHTS;
		if (BootsFahrt) Guy.Zustand = GUYBOOTLINKS;
		else Guy.Zustand = GUYLINKS;
		if (Frage == 1) 
		{
			NeuesSpiel(true);
			return;
		}
		Frage = -1;
		break;
	}
}

void AkTagNeubeginnen()
{
	ZWEID Erg;
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		Erg = GetKachel(Guy.PosAlt.x,Guy.PosAlt.y);
		if ((Erg.x == Guy.Pos.x) && (Erg.y == Guy.Pos.y)) ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		else if (RoutePunkt%2 == 0) ShortRoute(RouteKoor[RoutePunkt].x, RouteKoor[RoutePunkt].y); //Nur bis zur Mitte der aktuellen Kacheln laufen
		else ShortRoute(RouteKoor[RoutePunkt+1].x, RouteKoor[RoutePunkt+1].y);
		TwoClicks = -1; //Keine Ahnung warum ich das hier machen mu�
		break;
	case 2:
	 	Guy.Aktiv = true;
		if (BootsFahrt) Guy.Zustand = GUYBOOTWARTEN;
		else Guy.Zustand = GUYWARTEN;
		PapierText = DrawText(TAGNEU,TXTPAPIER,1);
		break;
	case 3:
		Guy.Aktion = AKNICHTS;
		if (BootsFahrt) Guy.Zustand = GUYBOOTLINKS;
		else Guy.Zustand = GUYLINKS;
		if (Frage == 1) 
		{
			NeuesSpiel(false);
			return;
		}
		Frage = -1;
		break;
	}
}

void AkSpielverlassen()
{
	ZWEID Erg;
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		Erg = GetKachel(Guy.PosAlt.x,Guy.PosAlt.y);
		if ((Erg.x == Guy.Pos.x) && (Erg.y == Guy.Pos.y)) ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		else if (RoutePunkt%2 == 0) ShortRoute(RouteKoor[RoutePunkt].x, RouteKoor[RoutePunkt].y); //Nur bis zur Mitte der aktuellen Kacheln laufen
		else ShortRoute(RouteKoor[RoutePunkt+1].x, RouteKoor[RoutePunkt+1].y);
		TwoClicks = -1; //Keine Ahnung warum ich das hier machen mu�
		break;
	case 2:
	 	Guy.Aktiv = true;
		if (BootsFahrt) Guy.Zustand = GUYBOOTWARTEN;
		else Guy.Zustand = GUYWARTEN;
		PapierText = DrawText(SPIELVERLASSEN,TXTPAPIER,1);
		break;
	case 3:
		Guy.Aktion = AKNICHTS;
		if (BootsFahrt) Guy.Zustand = GUYBOOTLINKS;
		else Guy.Zustand = GUYLINKS;
		if (Frage == 1) 
		{
			if (Guy.Resource[GESUNDHEIT] > 10) SaveGame();
			Spielzustand = SZABSPANN;
		}
		Frage = -1;
		break;
	}
}

void AkTod()
{
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		Guy.Aktiv = true;
		if (BootsFahrt) Guy.Zustand = GUYBOOTWARTEN;
		else Guy.Zustand = GUYWARTEN;
		PapierText = DrawText(TOD,TXTPAPIER,1);
		break;
	case 2:
		if (!BootsFahrt)
		{
			Guy.Aktiv = true;
			Guy.Zustand = GUYHINLEGEN;
		}
		break;
	case 3:
	 	Guy.Aktiv = true;
		Nacht = false;
		Fade(100,100,100);
		if (BootsFahrt) Guy.Zustand = GUYBOOTTOD; 
		else Guy.Zustand = GUYTOD;
		break;
	case 4:
	 	Guy.Aktiv = true;
		Nacht = true;
		Guy.Zustand = GUYWARTEN;
		PapierText = DrawText(TAGNEU,TXTPAPIER,1);
		break;
	case 5:
		Nacht = false;
		if (BootsFahrt) Guy.Zustand = GUYBOOTLINKS;
		else Guy.Zustand = GUYLINKS;
		Guy.Aktion = AKNICHTS;
		if (Frage == 2) 
		{
			Spielzustand = SZABSPANN;
		}
		else  NeuesSpiel(false);
		Frage = -1;
		break;
	}
}

void AkAbbruch()
{
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x = Guy.PosScreen.x;
		Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y = Guy.PosScreen.y;

		ShortRoute(((Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].x +
					 Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].x) /2),
				   ((Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].y +
			         Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].y) /2));
		break;
	case 2:
		Guy.Aktion = AKNICHTS;
		break;
	}
}


void AkDestroy()
{
	short i; //Um sich kurz das Objekt zu merken 

	if (Guy.AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
	}
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Breite+4,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Hoehe);
		break;
	case 2: case 4:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYFAELLEN;
		AddResource(WASSER,-1);
		AddResource(NAHRUNG,-1);
		AddTime(0,5);
		break;
	case 3: case 5:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYSCHLAGEN;
		AddResource(WASSER,-1);
		AddResource(NAHRUNG,-1);
		AddTime(0,5);
		break;
	case 6:
		if (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == SOS) Chance -= 0.1f;
		i = Scape[Guy.Pos.x][Guy.Pos.y].Objekt;
		if ((i>= HAUS1) && (i<=HAUS3)) Scape[Guy.Pos.x][Guy.Pos.y].Objekt = BAUMGROSS;
		else 
		{
			Scape[Guy.Pos.x][Guy.Pos.y].Objekt   =-1;
		    Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x	 = 0;
		    Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y	 = 0;
			Scape[Guy.Pos.x][Guy.Pos.y].Phase    =-1;
		}
		Scape[Guy.Pos.x][Guy.Pos.y].AkNummer = 0;
		if (i == ROHR) FillRohr();
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 7:
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkSuchen()
{
	ZWEID Ziel;
	ZWEID Erg;
	short i;
	
	if (Guy.AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
	}
	while(1)
	{
		Ziel.x = Scape[Guy.Pos.x][Guy.Pos.y].xScreen+rand()%KXPIXEL; 
		Ziel.y = Scape[Guy.Pos.x][Guy.Pos.y].yScreen+rand()%KYPIXEL;
		Erg = GetKachel(Ziel.x,Ziel.y);
		if ((Erg.x == Guy.Pos.x) && (Erg.y == Guy.Pos.y)) break; //Wenn das gefundene Ziel in der Kachel, dann fertig
	}
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1: case 3: case 5: case 7:
		if (BootsFahrt) 
		{	
			if (Guy.AkNummer == 1) 
			{
				Guy.Aktiv   = true;
				Guy.PosScreen.y -= 2;
				Guy.Zustand = GUYTAUCHEN1;
				PlaySound(WAVPLATSCH,100);
			}
		}
		else ShortRoute(Ziel.x,Ziel.y);
		break;
	case 2: case 4: case 6: case 8:
		Guy.Aktiv   = true;
		if (BootsFahrt) 
		{
			if (Guy.AkNummer == 2) 
			{
				Guy.PosScreen.y += 5;
			}
			Guy.Zustand = GUYTAUCHEN2;
		}
		else            Guy.Zustand = GUYSUCHEN;
		AddTime(0,4);
		break;
	case 9:
		if (BootsFahrt)
		{
			Guy.Aktiv   = true;
			Guy.Zustand = GUYTAUCHEN3;
			PlaySound(WAVPLATSCH,100);
		}
		break;
	case 10:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;	
	case 11:
		Guy.Aktiv	= true;
		if (BootsFahrt) Guy.Zustand = GUYBOOTLINKS;
		//Auf Strand und Fluss
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Art == 2) || 
			((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= FLUSS1) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= SCHLEUSE6)))
		{
			
			if (Guy.Inventar[ROHSTEIN] < 10)
			{
				PapierText = DrawText(ROHSTEINGEFUNDEN,TXTPAPIER,1);
				Guy.Inventar[ROHSTEIN] += 3;
				if (Guy.Inventar[ROHSTEIN] > 10) Guy.Inventar[ROHSTEIN] = 10;
			}
			else PapierText = DrawText(ROHSTEINZUVIEL,TXTPAPIER,1);
			
		}
		else if (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == BUSCH) 
		{
			i = rand()%2;
			switch(i)
			{
			case 0:
				if (Guy.Inventar[ROHAST] < 10) 
				{
					PapierText = DrawText(ROHASTGEFUNDEN,TXTPAPIER,1);
					Guy.Inventar[ROHAST]++;
				}
				else PapierText = DrawText(ROHASTZUVIEL,TXTPAPIER,1);
				break;
			case 1:
				if (Guy.Inventar[ROHBLATT] < 10)
				{
					PapierText = DrawText(ROHBLATTGEFUNDEN,TXTPAPIER,1);
					Guy.Inventar[ROHBLATT]++;
				}
				else PapierText = DrawText(ROHBLATTZUVIEL,TXTPAPIER,1);
				break;
			}
		}
		else if (((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= BAUM1) && 
				  (Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= BAUMGROSS)) ||
				 ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= HAUS1) && 
				  (Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= HAUS3)))
		{
			i = rand()%3;
			switch(i)
			{
			case 0:
				if (Guy.Inventar[ROHAST] < 10) 
				{
					PapierText = DrawText(ROHASTGEFUNDEN,TXTPAPIER,1);
					Guy.Inventar[ROHAST]++;
				}
				else PapierText = DrawText(ROHASTZUVIEL,TXTPAPIER,1);
				break;
			case 1:
				if (Guy.Inventar[ROHBLATT] < 10)
				{
					PapierText = DrawText(ROHBLATTGEFUNDEN,TXTPAPIER,1);
					Guy.Inventar[ROHBLATT]++;
				}
				else PapierText = DrawText(ROHBLATTZUVIEL,TXTPAPIER,1);
				break;
			case 2:
				if (Guy.Inventar[ROHLIANE] < 10)
				{
					PapierText = DrawText(ROHLIANEGEFUNDEN,TXTPAPIER,1);
					Guy.Inventar[ROHLIANE]++;
				}
				else PapierText = DrawText(ROHLIANEZUVIEL,TXTPAPIER,1);
				break;
			}
		}
		else if (BootsFahrt)
		{
			if  (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == WRACK)
			{
				if (Guy.Inventar[ROHFERNROHR] == 0)
				{
					PapierText = DrawText(FERNROHRGEFUNDEN,TXTPAPIER,1);
					Guy.Inventar[ROHFERNROHR] = 1;
					Bmp[BUTTAUSSCHAU].Phase = 0;
					Guy.Inventar[ROHHAMMER]   = 1;
					Bmp[BUTTHAUS1].Phase = 0;
					Bmp[BUTTHAUS2].Phase = 0;
					Bmp[BUTTHAUS3].Phase = 0;
				}
				else PapierText = DrawText(NICHTSGEFUNDEN2,TXTPAPIER,1);
			}
			else if  (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == WRACK2)
			{
				if (Guy.Inventar[ROHKARTE] == 0)
				{
					PapierText = DrawText(KARTEGEFUNDEN,TXTPAPIER,1);
					Guy.Inventar[ROHKARTE] = 1;
					Bmp[BUTTSCHATZKARTE].Phase = 0;
					Guy.Inventar[ROHSCHAUFEL]   = 1;
					Bmp[BUTTSCHATZ].Phase = 0;
				}
				else PapierText = DrawText(NICHTSGEFUNDEN2,TXTPAPIER,1);
			}
			else PapierText = DrawText(NICHTSGEFUNDEN2,TXTPAPIER,1);
		}
		else 
		{
			PapierText = DrawText(NICHTSGEFUNDEN,TXTPAPIER,1);
		}
		break;
	case 12:
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkEssen()
{
	if (Guy.AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
	}
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Breite/2,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Hoehe+2);
		break;
	case 2: case 3:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYESSEN;
		AddResource(NAHRUNG,15);
		AddTime(0,2);
		break;
	case 4:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 5:
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkSchleuder()
{
	if (Guy.AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
	}
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Breite/2-14,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Hoehe+9);
		break;
	case 2: 
		Guy.Aktiv   = true;
		Guy.Zustand = GUYSCHLEUDER;
		Guy.PosScreen.x += 5;
		AddTime(0,2);
		PlaySound(WAVSCHLEUDER,100);
		break;
	case 3:
		Guy.PosScreen.x -= 5;
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Breite/2+6,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Hoehe+2);
		break;
	case 4:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYSUCHEN;
		AddResource(NAHRUNG,5);
		AddTime(0,20);
		break;
	case 5:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 6:
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkTrinken()
{
	if (Guy.AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
	}
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		ShortRoute(Guy.PosScreen.x-4,
			       Guy.PosScreen.y-2);
		break;
	case 2: case 3:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYTRINKEN;
		AddResource(WASSER,30);
		AddTime(0,3);
		break;
	case 4:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 5:
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkFaellen()
{
	short i;

	if (Guy.AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
	}
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Breite/2+9,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Hoehe+3);
		break;
	case 2: case 3: case 4: case 5: case 6:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYFAELLEN;
		AddResource(WASSER,-2);
		AddResource(NAHRUNG,-2);
		AddTime(0,10);
		break;
	case 7:
		Guy.Aktiv = true;
		Guy.Zustand = GUYWARTEN;
		i = Scape[Guy.Pos.x][Guy.Pos.y].Objekt+(BAUM1DOWN-BAUM1);
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = i;	
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x -= 17;
		PlaySound(WAVBAUMFAELLT,100);
		break;
	case 8:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 9:
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = -1;
		Guy.Inventar[ROHSTAMM]++;
		if (Guy.Inventar[ROHSTAMM] > 10) Guy.Inventar[ROHSTAMM] = 10;
		Guy.Inventar[ROHAST] += 5;
		if (Guy.Inventar[ROHAST] > 10) Guy.Inventar[ROHAST] = 10;
		Guy.Inventar[ROHBLATT] += 5;
		if (Guy.Inventar[ROHBLATT] > 10) Guy.Inventar[ROHBLATT] = 10;
		Guy.Inventar[ROHLIANE] += 2;
		if (Guy.Inventar[ROHLIANE] > 10) Guy.Inventar[ROHLIANE] = 10;
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkAngeln()
{
	
	if (Guy.AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
	}
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		switch (Scape[Guy.Pos.x][Guy.Pos.y].Objekt)
		{
		case FLUSS1:
			ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+35,
				       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+26);
			break;
		case FLUSS2:
			ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+19,
				       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+26);
			break;
		case FLUSS3:
			ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+22,
				       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+20);
			break;
		case FLUSS4:
			ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+34,
				       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+23);
			break;
		case FLUSS6: case FLUSS7: case MUENDUNG2: case QUELLE2: case SCHLEUSE2: case SCHLEUSE3:
			ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+34,
				       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+33);
			break;
		case FLUSS5: case FLUSS9: case MUENDUNG1: case QUELLE1: case SCHLEUSE1: case SCHLEUSE5:
			ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+20,
				       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+33);
			break;
	    case FLUSS8: case MUENDUNG4: case QUELLE3:  case SCHLEUSE4:
			ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+22,
				       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+26);
			break;
		case FLUSS10: case MUENDUNG3: case QUELLE4: case SCHLEUSE6:
			ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+32,
				       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+26);
			break;
		}
		break;
	case 2: 
		Guy.Aktiv   = true;
		PlaySound(WAVANGEL,100);
		if (BootsFahrt) 
		{
			Guy.PosScreen.y -= 2;
			Guy.Zustand = GUYBOOTANGELN1;
		}
		switch (Scape[Guy.Pos.x][Guy.Pos.y].Objekt)
		{
		case FLUSS1: case FLUSS6: case FLUSS7: case MUENDUNG2: case QUELLE2: case SCHLEUSE2: case SCHLEUSE3:
			Guy.Zustand = GUYANGELN1LINKS;
			break;
		case FLUSS2: case FLUSS5: case FLUSS9: case MUENDUNG1: case QUELLE1: case SCHLEUSE1: case SCHLEUSE5:
			Guy.Zustand = GUYANGELN1OBEN;
			break;
		case FLUSS3: case FLUSS8: case MUENDUNG4: case QUELLE3:  case SCHLEUSE4:
			Guy.Zustand = GUYANGELN1RECHTS;
			break;
		case FLUSS4: case FLUSS10: case MUENDUNG3: case QUELLE4: case SCHLEUSE6:
			Guy.Zustand = GUYANGELN1UNTEN;
			break;
		}
		break;
	case 3: case 4: case 5: case 6:   
		Guy.Aktiv   = true;
		if (BootsFahrt)	Guy.Zustand = GUYBOOTANGELN2;
		
		switch (Scape[Guy.Pos.x][Guy.Pos.y].Objekt)
		{
		case FLUSS1: case FLUSS6: case FLUSS7: case MUENDUNG2: case QUELLE2: case SCHLEUSE2: case SCHLEUSE3:
			Guy.Zustand = GUYANGELN2LINKS;
			break;
		case FLUSS2: case FLUSS5: case FLUSS9: case MUENDUNG1: case QUELLE1: case SCHLEUSE1: case SCHLEUSE5:
			Guy.Zustand = GUYANGELN2OBEN;
			break;
		case FLUSS3: case FLUSS8: case MUENDUNG4: case QUELLE3: case SCHLEUSE4:
			Guy.Zustand = GUYANGELN2RECHTS;
			break;
		case FLUSS4: case FLUSS10: case MUENDUNG3: case QUELLE4: case SCHLEUSE6:
			Guy.Zustand = GUYANGELN2UNTEN;
			break;
		}
		Guy.Resource[GESUNDHEIT] += 2;
		AddTime(0,20);
		break;
	case 7: 
		Guy.Aktiv   = true;
		if (BootsFahrt)	Guy.Zustand = GUYBOOTANGELN3;
		
		switch (Scape[Guy.Pos.x][Guy.Pos.y].Objekt)
		{
		case FLUSS1: case FLUSS6: case FLUSS7: case MUENDUNG2: case QUELLE2: case SCHLEUSE2: case SCHLEUSE3:
			Guy.Zustand = GUYANGELN3LINKS;
			break;
		case FLUSS2: case FLUSS5: case FLUSS9: case MUENDUNG1: case QUELLE1: case SCHLEUSE1: case SCHLEUSE5:
			Guy.Zustand = GUYANGELN3OBEN;
			break;
		case FLUSS3: case FLUSS8: case MUENDUNG4: case QUELLE3: case SCHLEUSE4:
			Guy.Zustand = GUYANGELN3RECHTS;
			break;
		case FLUSS4: case FLUSS10: case MUENDUNG3: case QUELLE4: case SCHLEUSE6:
			Guy.Zustand = GUYANGELN3UNTEN;
			break;
		}
		break;
    case 8:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 9:
		Guy.Resource[NAHRUNG] += 20;
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkAnzuenden()
{
	if (Guy.AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
	}
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Breite/2-10,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y
						+Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Hoehe+1);
		break;
	case 2: 
		Guy.Aktiv   = true;
		Guy.Zustand = GUYANZUENDEN;
		Guy.PosScreen.x += 5;
		AddTime(0,1);
		break;
	case 3:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYWARTEN;
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = FEUER;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = (short)Bmp[FEUER].rcDes.left;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = (short)Bmp[FEUER].rcDes.top;
		Chance += 2+2*Scape[Guy.Pos.x][Guy.Pos.y].Hoehe;
		AddTime(0,2);
		Guy.PosScreen.x -= 5;
		break;
	case 4:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 5:
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkAusschau()
{
	if (Guy.AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
	}
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1: 
		Guy.Aktiv   = true;
		Guy.Zustand = GUYAUSSCHAU;
		AddTime(0,40);
		Chance += 1 + Scape[Guy.Pos.x][Guy.Pos.y].Hoehe;
		break;
	case 2:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYWARTEN;
		AddTime(0,40);
		break;
	case 3:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYAUSSCHAU;
		AddTime(0,40);
		break;
	case 4:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 5:
		Chance -= 1 + Scape[Guy.Pos.x][Guy.Pos.y].Hoehe;
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkSchatz()
{
	if (Guy.AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	
	}
	Guy.AkNummer++;
	
	switch(Guy.AkNummer)
	{
	case 1:
		Guy.PosScreen.x -= 5;
		Guy.PosScreen.y += 1;
		Guy.Aktiv   = true;
		Guy.Zustand = GUYSCHAUFELN;
		break;
	case 2:
		AddTime(0,20);
		AddResource(WASSER,-10);
		AddResource(NAHRUNG,-10);
		Guy.PosScreen.x += 5;
		Guy.PosScreen.y -= 1;
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		if (((Guy.Pos.x == SchatzPos.x) && (Guy.Pos.y == SchatzPos.y)) &&
			(!SchatzGef))
		{
			PapierText = DrawText(SCHATZGEFUNDEN,TXTPAPIER,1);
			Guy.Inventar[ROHSTREICHHOLZ] = 1;
			Bmp[BUTTANZUENDEN].Phase = 0;
			SchatzGef	= true;
		}
		else PapierText = DrawText(KEINSCHATZ,TXTPAPIER,1);
		break;
	case 3:
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkFeld()
{
	short i;
	
	if (Scape[Guy.Pos.x][Guy.Pos.y].AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
		for (i=0;i<BILDANZ;i++)	
			Scape[Guy.Pos.x][Guy.Pos.y].Rohstoff[i] = Bmp[FELD].Rohstoff[i];
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = FELD;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = (short)Bmp[FELD].rcDes.left;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = (short)Bmp[FELD].rcDes.top;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = Bmp[FELD].Anzahl;
	}
	Scape[Guy.Pos.x][Guy.Pos.y].AkNummer++;
	if (!CheckRohstoff())
	{
		Scape[Guy.Pos.x][Guy.Pos.y].AkNummer--;
		return;
	}
	switch(Scape[Guy.Pos.x][Guy.Pos.y].AkNummer)
	{
	case 1:
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+22,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+23);
		break;
	case 4:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 4;
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+25,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+21);
		AddResource(WASSER,-2);
		AddResource(NAHRUNG,-2);
		AddTime(0,30);
		break;
	case 7:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 5;
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+28,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+19);
		AddResource(WASSER,-2);
		AddResource(NAHRUNG,-2);
		AddTime(0,30);
		break;
	case 10:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 6;
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+31,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+17);
		AddResource(WASSER,-2);
		AddResource(NAHRUNG,-2);
		AddTime(0,30);
		break;
	case 13:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 7;
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+34,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+15);
		AddResource(WASSER,-2);
		AddResource(NAHRUNG,-2);
		AddTime(0,30);
		break;
	case 16:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 8;
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+36,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+13);
		AddResource(WASSER,-2);
		AddResource(NAHRUNG,-2);
		AddTime(0,30);
		break;
	case 2: case 3: case 5: case 6: case 8: case 9: case 11: case 12: case 14: case 15: case 17: case 18:   
		Guy.Aktiv   = true;
		Guy.Zustand = GUYFELD;
		break;
	case 19:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = FELD;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = (short)Bmp[FELD].rcDes.left;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = (short)Bmp[FELD].rcDes.top;
		break;
	case 20:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		Bmp[BUTTSTOP].Phase = -1;
		if (Bmp[FELD].First)
		{
			PapierText = DrawText(FELDHILFE,TXTPAPIER,1);
			Bmp[FELD].First = false;
		}
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkTagEnde()
{
	ZWEID Erg;

	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		Fade(100,90,90);
		Stunden = 12;
		Minuten = 0;
		TwoClicks = -1; //Keine Ahnung warum ich das hier machen mu�
		Bmp[BUTTSTOP].Phase = -1;
		if ((Guy.Zustand == GUYSCHLAFZELT) || (Guy.Zustand == GUYSCHLAFEN) || 
			(Guy.Zustand == GUYSCHLAFHAUS) || (BootsFahrt)) break; 
		Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.x = Guy.PosScreen.x;
		Scape[Guy.Pos.x][Guy.Pos.y].GPosAlt.y = Guy.PosScreen.y;
		Erg = GetKachel(Guy.PosAlt.x,Guy.PosAlt.y);
		if ((Erg.x == Guy.Pos.x) && (Erg.y == Guy.Pos.y)) ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		else if (RoutePunkt%2 == 0) ShortRoute(RouteKoor[RoutePunkt].x, RouteKoor[RoutePunkt].y); //Nur bis zur Mitte der aktuellen Kacheln laufen
		else ShortRoute(RouteKoor[RoutePunkt+1].x, RouteKoor[RoutePunkt+1].y);
		break;
	case 2:
		Fade(95,80,80);
		Stunden = 12;
		Minuten = 0;
		if ((Guy.Zustand == GUYSCHLAFZELT) || (Guy.Zustand == GUYSCHLAFEN) || 
			(Guy.Zustand == GUYSCHLAFHAUS) || (BootsFahrt)) break; 
		//Wohnbare Objekte in der Umgebung suchen 
		Erg.x = -1;
		Erg.y = -1;
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ZELT) || (Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3))
		{
			Erg.x = Guy.Pos.x;
			Erg.y = Guy.Pos.y;
		}
		else if (Scape[Guy.Pos.x-1][Guy.Pos.y].Objekt == HAUS3)
		{
			Erg.x = Guy.Pos.x-1;
			Erg.y = Guy.Pos.y;
		}
		else if (Scape[Guy.Pos.x][Guy.Pos.y-1].Objekt == HAUS3)
		{
			Erg.x = Guy.Pos.x;
			Erg.y = Guy.Pos.y-1;
		}
		else if (Scape[Guy.Pos.x+1][Guy.Pos.y].Objekt == HAUS3)
		{
			Erg.x = Guy.Pos.x+1;
			Erg.y = Guy.Pos.y;
		}
		else if (Scape[Guy.Pos.x][Guy.Pos.y+1].Objekt == HAUS3)
		{
			Erg.x = Guy.Pos.x;
			Erg.y = Guy.Pos.y+1;
		}
		else if (Scape[Guy.Pos.x-1][Guy.Pos.y].Objekt == ZELT)
		{
			Erg.x = Guy.Pos.x-1;
			Erg.y = Guy.Pos.y;
		}
		else if (Scape[Guy.Pos.x][Guy.Pos.y-1].Objekt == ZELT)
		{
			Erg.x = Guy.Pos.x;
			Erg.y = Guy.Pos.y-1;
		}
		else if (Scape[Guy.Pos.x+1][Guy.Pos.y].Objekt == ZELT)
		{
			Erg.x = Guy.Pos.x+1;
			Erg.y = Guy.Pos.y;
		}
		else if (Scape[Guy.Pos.x][Guy.Pos.y+1].Objekt == ZELT)
		{
			Erg.x = Guy.Pos.x;
			Erg.y = Guy.Pos.y+1;
		}
		if ((Erg.x != -1) && (Erg.y != -1))
		{
			Guy.Pos.x = Erg.x;
			Guy.Pos.y = Erg.y;
			if ((Scape[Erg.x][Erg.y].Objekt == ZELT) && 
				(Scape[Erg.x][Erg.y].Phase < Bmp[Scape[Erg.x][Erg.y].Objekt].Anzahl))
				  ShortRoute(Scape[Erg.x][Erg.y].xScreen+Scape[Erg.x][Erg.y].ObPos.x+3,
				             Scape[Erg.x][Erg.y].yScreen+Scape[Erg.x][Erg.y].ObPos.y+20); 
			else if ((Scape[Erg.x][Erg.y].Objekt == HAUS3) && 
				(Scape[Erg.x][Erg.y].Phase < Bmp[Scape[Erg.x][Erg.y].Objekt].Anzahl))
				  ShortRoute(Scape[Erg.x][Erg.y].xScreen+Scape[Erg.x][Erg.y].ObPos.x+
				             Bmp[BAUMGROSS].Breite/2,
				             Scape[Erg.x][Erg.y].yScreen+Scape[Erg.x][Erg.y].ObPos.y+
				             Bmp[BAUMGROSS].Hoehe+1); 
		}
		break;
	case 3:
		Fade(90,70,70);
		Stunden = 12;
		Minuten = 0;
		if ((Guy.Zustand == GUYSCHLAFZELT) || (Guy.Zustand == GUYSCHLAFEN) || 
			(Guy.Zustand == GUYSCHLAFHAUS) || (BootsFahrt)) break; 
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl)) 
		{
			Guy.Aktiv   = true;
			Guy.Zustand = GUYKLETTERN1;
		}
		break;
	case 4:
		Fade(70,60,60);
		Stunden = 12;
		Minuten = 0;
		if ((Guy.Zustand == GUYSCHLAFZELT) || (Guy.Zustand == GUYSCHLAFEN) || 
			(Guy.Zustand == GUYSCHLAFHAUS) || (BootsFahrt)) break; 
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ZELT) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase <  Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{
			Guy.Aktiv   = true;
			Guy.Zustand = GUYGEHINZELT;
		}
		else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			     (Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{
			Guy.Aktiv   = true;
			Guy.Zustand = GUYGEHINHAUS;
		}		
		else
		{
			Guy.PosScreen.x += 3;
			Guy.Aktiv   = true;
			Guy.Zustand = GUYHINLEGEN;
		}
		break;
	case 5:
		Fade(55,50,55);
		Stunden = 12;
		Minuten = 0;
		if (BootsFahrt) break;
		Guy.Aktiv   = true;
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ZELT) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))	
		{
			if (Guy.Zustand != GUYSCHLAFZELT) Guy.PosScreen.x += 4;
			Guy.Zustand = GUYSCHLAFZELT;
		}
		else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))	
		{
			if (Guy.Zustand != GUYSCHLAFHAUS) Guy.PosScreen.x += 14;
			Guy.Zustand = GUYSCHLAFHAUS;
		}
		else Guy.Zustand = GUYSCHLAFEN;
		break;
	case 6:
		Fade(25,25,35);
		Stunden = 12;
		Minuten = 0;
		if (BootsFahrt) break;
		Guy.Aktiv   = true;
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ZELT) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))	
			Guy.Zustand = GUYSCHLAFZELT;
		else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))	
			Guy.Zustand = GUYSCHLAFHAUS;
		else Guy.Zustand = GUYSCHLAFEN;
		break;
	case 7:
		Fade(0,0,0); // Nicht verwirren lassen, da das Bild in Zeige() schwarz �bermalt wird
		Nacht	= true;
		Stunden = 12;
		Minuten = 0;
		PlaySound(WAVWOLF,100);
		//Falsche Objekte L�schen
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt >= BAUM1DOWN) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Objekt <= BAUM4DOWN))
		{
			Scape[Guy.Pos.x][Guy.Pos.y].Objekt = -1;
			Guy.Inventar[ROHSTAMM]++;
			if (Guy.Inventar[ROHSTAMM] > 10) Guy.Inventar[ROHSTAMM] = 10;
		}
		
		//Je nach Schlafort Zustand ver�ndern
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ZELT) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{
			AddResource(GESUNDHEIT,-5);
			if (Guy.Resource[GESUNDHEIT] <= 0)
			{
				Guy.Aktiv = true;
				PapierText = DrawText(TAGENDE5,TXTPAPIER,1);
				Guy.AkNummer = 2;
				Guy.Aktion = AKTOD;
				Stunden = 0;
				Minuten = 0;
			}
			else
			{
				Guy.Aktiv = true;
				PapierText = DrawText(TAGENDE2,TXTPAPIER,1);
			}
		}
		else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			     (Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{
			AddResource(GESUNDHEIT,+20);	
			Guy.Aktiv = true;
			PapierText = DrawText(TAGENDE4,TXTPAPIER,1);
		}
		else if (BootsFahrt)
		{
			Guy.Aktiv = true;
			Guy.Zustand = GUYBOOTWARTEN;
			PapierText = DrawText(TAGENDE3,TXTPAPIER,1);
			Guy.AkNummer = 2;
			Guy.Aktion = AKTOD;
			Stunden = 0;
			Minuten = 0;
		}
		else
		{
			AddResource(GESUNDHEIT,-20);
			if (Guy.Resource[GESUNDHEIT] <= 0)
			{
				Guy.Aktiv = true;
				PapierText = DrawText(TAGENDE5,TXTPAPIER,1);
				Guy.AkNummer = 2;
				Guy.Aktion = AKTOD;
				Stunden = 0;
				Minuten = 0;
			}
			else
			{
				Guy.Aktiv = true;
				PapierText = DrawText(TAGENDE1,TXTPAPIER,1);
			}
		}
		break;
	case 8:
		Fade(20,20,30);
		Nacht	= false;
		Tag++;
		Stunden = 0;
		Minuten = 0;
		//if (BootsFahrt) NeuesSpiel(true); //Sp�ter hier tot!!
			
		Guy.Aktiv   = true;
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ZELT) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
			Guy.Zustand = GUYSCHLAFZELT;
		else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
			Guy.Zustand = GUYSCHLAFHAUS;
		else Guy.Zustand = GUYSCHLAFEN;
		break;
	case 9:	
		Fade(40,40,40);		
		Stunden = 0;
		Minuten = 0;
			
		Stunden = 0; Minuten = 0;
		Guy.Aktiv = true;
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ZELT) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
			Guy.Zustand = GUYSCHLAFZELT;
		else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
			Guy.Zustand = GUYSCHLAFHAUS;
		else Guy.Zustand = GUYSCHLAFEN;
		break;
	case 10:
		Fade(70,60,60);
		Stunden = 0;
		Minuten = 0;
		StopSound(WAVSCHNARCHEN);
		Guy.Aktiv = true;
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{
			Guy.PosScreen.x -= 14;
			Guy.Zustand = GUYGEHAUSHAUS;
		}
		else Guy.Zustand = GUYAUFSTEHEN;
		break;
	case 11:
		Fade(90,80,80);
		Stunden = 0;
		Minuten = 0;
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{
			Guy.Aktiv = true;
			Guy.Zustand = GUYKLETTERN2;
		}
		break;
	case 12:
		Fade(100,100,100);
		Stunden = 0;
		Minuten = 0;
		Guy.Zustand = GUYLINKS;
		Guy.Aktion = AKNICHTS;
		if (Guy.Resource[GESUNDHEIT] > 10) SaveGame();
		break;
	}
}

void AkGerettet()
{
	ZWEID Erg;
	short x;

	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		Erg = GetKachel(Guy.PosAlt.x,Guy.PosAlt.y);
		if ((Erg.x == Guy.Pos.x) && (Erg.y == Guy.Pos.y)) ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		else if (RoutePunkt%2 == 0) ShortRoute(RouteKoor[RoutePunkt].x, RouteKoor[RoutePunkt].y); //Nur bis zur Mitte der aktuellen Kacheln laufen
		else ShortRoute(RouteKoor[RoutePunkt+1].x, RouteKoor[RoutePunkt+1].y);
		TwoClicks = -1; //Keine Ahnung warum ich das hier machen mu�
		break;
	case 2:
	 	Guy.Aktiv = true;
		Guy.Zustand = GUYWARTEN;
		PapierText = DrawText(GERETTET,TXTPAPIER,1);
		break;
	case 3:
		if (Frage == 2)
		{
			Guy.Aktion = AKNICHTS;
			Frage = -1;
			break;
		}
		Spielzustand = SZGERETTET;
		Frage = -1;
		break;
	case 4:
		// Route herstellen
		Guy.Aktiv = true;
		Guy.Zustand = GUYLINKS;
		RoutePunkt = -1;
		Steps		= 0;
		Step		= 0;
		RouteStart.x = Guy.Pos.x;
		RouteStart.y = Guy.Pos.y;
		RouteZiel.y  = Guy.Pos.y;
		for (x=MAXXKACH-1;x>1;x--)//Position des Rettungsschiffs festlegen
		{
			if (Scape[x][Guy.Pos.y].Art != 1) break;
			RouteZiel.x = x+1;
		}
		//Schiff hinbauen
		Scape[RouteZiel.x][RouteZiel.y].Phase = 0;
		Scape[RouteZiel.x][RouteZiel.y].Objekt = GUYSCHIFF;
		Scape[RouteZiel.x][RouteZiel.y].ObPos.x = 10;
		Scape[RouteZiel.x][RouteZiel.y].ObPos.y = 10;
		RouteZiel.x -= 2;
		FindTheWay();
		Guy.Zustand = GUYLINKS;
		break;
	case 5:
		Guy.Zustand = GUYLINKS;
		ShortRoute(((Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].x +
			         Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].x) /2),
			       ((Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].y +
			         Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].y) /2));
		break;
	case 6:
		Guy.Pos.x += 2;
		Guy.Zustand = GUYSCHWIMMEN;
		ShortRoute(((Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].x +
			         Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].x) /2),
			       ((Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].y +
			         Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].y) /2));
		break;
	case 7:
		Guy.PosScreen.y -= 10;
		if (!BootsFahrt) ChangeBootsFahrt();
		Guy.Aktiv = true;
		Guy.Zustand = GUYSCHIFF;
		RoutePunkt = -1;
		Steps		= 0;
		Step		= 0;
		RouteStart.x = Guy.Pos.x;
		RouteStart.y = Guy.Pos.y;
		RouteZiel.y  = Guy.Pos.y;
		RouteZiel.x = MAXXKACH-2;
		FindTheWay();
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = (short)Bmp[MEERWELLEN].rcDes.left;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = (short)Bmp[MEERWELLEN].rcDes.top;
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = MEERWELLEN;
		break;
	case 8:
	 	Guy.Aktiv = true;
		Guy.Zustand = GUYSCHIFF;
		break;
	case 9:
		Guy.Aktion = AKNICHTS;
		Guy.Zustand = GUYLINKS;
		Spielzustand = SZABSPANN;
		break;
	}
}

void AkZelt()
{
	short i;

	if (Scape[Guy.Pos.x][Guy.Pos.y].AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = ZELT;
		for (i=0;i<BILDANZ;i++)	
			Scape[Guy.Pos.x][Guy.Pos.y].Rohstoff[i] = Bmp[ZELT].Rohstoff[i];
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = (short)Bmp[ZELT].rcDes.left;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = (short)Bmp[ZELT].rcDes.top;
	}
	Scape[Guy.Pos.x][Guy.Pos.y].AkNummer++;
	if (!CheckRohstoff())
	{
		Scape[Guy.Pos.x][Guy.Pos.y].AkNummer--;
		return;
	}
	switch(Scape[Guy.Pos.x][Guy.Pos.y].AkNummer)
	{
	case 1: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+22,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+12);
		break;
	case 2: case 3: case 12: case 13: 
		Guy.Aktiv   = true;
		Guy.Zustand = GUYBINDENUNTEN;
		AddResource(WASSER,-2);
		AddResource(NAHRUNG,-2);
		AddTime(0,15);
		break;
	case 4: 
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 2;
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+31,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+20);
		break;
	case 5:
		ShortRoute(Guy.PosAlt.x,
			       Guy.PosAlt.y);
		break;
	case 6: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+3,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+20);

		break;
	case 7: case 8:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYBINDENOBEN;
		AddResource(WASSER,-2);
		AddResource(NAHRUNG,-2);
		AddTime(0,15);
		break;
	case 9:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 3;
		ShortRoute(Guy.PosAlt.x,
			       Guy.PosAlt.y);
		break;
	case 10:
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+31,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+20);
		break;
	case 11: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+22,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+12);
		break;
	case 14:
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+31,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+20);
		break;
	case 15:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 16:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		Bmp[BUTTSTOP].Phase = -1;
		if (Bmp[ZELT].First)
		{
			PapierText = DrawText(ZELTHILFE,TXTPAPIER,1);
			Bmp[ZELT].First = false;
		}
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkBoot()
{
	short i;

	if (Scape[Guy.Pos.x][Guy.Pos.y].AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = BOOT;
		for (i=0;i<BILDANZ;i++)	
			Scape[Guy.Pos.x][Guy.Pos.y].Rohstoff[i] = Bmp[BOOT].Rohstoff[i];
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = Bmp[BOOT].Anzahl;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = (short)Bmp[BOOT].rcDes.left;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = (short)Bmp[BOOT].rcDes.top;
	}
	Scape[Guy.Pos.x][Guy.Pos.y].AkNummer++;
	if (!CheckRohstoff())
	{
		Scape[Guy.Pos.x][Guy.Pos.y].AkNummer--;
		return;
	}
	switch(Scape[Guy.Pos.x][Guy.Pos.y].AkNummer)
	{
	case 1: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+30,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+21);
		break;
	case 2: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+29,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+20);
		break;
	case 3: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+28,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+19);
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[BOOT].Anzahl+1);
		break;
	case 4: case 5: case 6: case 8: case 9: case 10: case 12: case 13: case 14:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYSCHLAGEN;
		AddResource(WASSER,-2);
		AddResource(NAHRUNG,-2);
		AddTime(0,15);
		break;
	case 7: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+22,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+16);
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[BOOT].Anzahl+2);
		break;
	case 11: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+14,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+11);
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[BOOT].Anzahl+3);
		break;
	case 15:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 16:
		if (Scape[Guy.Pos.x-1][Guy.Pos.y].Art == 1)
		{
			Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
			Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = 0;
			Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = 10;
		}
		else if (Scape[Guy.Pos.x][Guy.Pos.y-1].Art == 1)
		{
			Scape[Guy.Pos.x][Guy.Pos.y].Phase = 1;
			Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = 25;
			Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = 10;
		}
		else if (Scape[Guy.Pos.x+1][Guy.Pos.y].Art == 1)
		{
			Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
			Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = 30;
			Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = 27;
		}
		else if (Scape[Guy.Pos.x][Guy.Pos.y+1].Art == 1)
		{
			Scape[Guy.Pos.x][Guy.Pos.y].Phase = 1;
			Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = 0;
			Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = 28;
		}
		Bmp[BUTTSTOP].Phase = -1;
		if (Bmp[BOOT].First)
		{
			PapierText = DrawText(BOOTHILFE,TXTPAPIER,1);
			Bmp[BOOT].First = false;
		}
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkRohr()
{
	short i;

	if (Scape[Guy.Pos.x][Guy.Pos.y].AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = ROHR;
		for (i=0;i<BILDANZ;i++)	
			Scape[Guy.Pos.x][Guy.Pos.y].Rohstoff[i] = Bmp[ROHR].Rohstoff[i];
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = Bmp[ROHR].Anzahl;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = (short)Bmp[ROHR].rcDes.left;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = (short)Bmp[ROHR].rcDes.top;
	}
	Scape[Guy.Pos.x][Guy.Pos.y].AkNummer++;
	if (!CheckRohstoff())
	{
		Scape[Guy.Pos.x][Guy.Pos.y].AkNummer--;
		return;
	}
	switch(Scape[Guy.Pos.x][Guy.Pos.y].AkNummer)
	{
	case 1: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+30,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+21);
		break;
	case 2: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+29,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+20);
		break;
	case 3: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+28,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+15);
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[ROHR].Anzahl+1);
		break;
	case 4: case 5: case 6: case 11: case 12: case 13: 
		Guy.Aktiv   = true;
		Guy.Zustand = GUYSCHLAGEN;
		AddResource(WASSER,-1);
		AddResource(NAHRUNG,-1);
		AddTime(0,5);
		break;
	case 7: case 8: case 9: case 14: case 15: case 16:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYFAELLEN;
		AddResource(WASSER,-1);
		AddResource(NAHRUNG,-1);
		AddTime(0,5);
		break;
	case 10: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+17,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+13);
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[ROHR].Anzahl+2);
		break;
	case 17:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 18:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		FillRohr();
		Bmp[BUTTSTOP].Phase = -1;
		if (Bmp[ROHR].First)
		{
			PapierText = DrawText(ROHRHILFE,TXTPAPIER,1);
			Bmp[ROHR].First = false;
		}
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkSOS()
{
	short i;

	if (Scape[Guy.Pos.x][Guy.Pos.y].AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = SOS;
		for (i=0;i<BILDANZ;i++)	
			Scape[Guy.Pos.x][Guy.Pos.y].Rohstoff[i] = Bmp[SOS].Rohstoff[i];
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = Bmp[SOS].Anzahl;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = (short)Bmp[SOS].rcDes.left;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = (short)Bmp[SOS].rcDes.top;
	}
	Scape[Guy.Pos.x][Guy.Pos.y].AkNummer++;
	if (!CheckRohstoff())
	{
		Scape[Guy.Pos.x][Guy.Pos.y].AkNummer--;
		return;
	}
	switch(Scape[Guy.Pos.x][Guy.Pos.y].AkNummer)
	{
	case 1: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+4,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+13);
		break;
	case 4: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+12,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+17);
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[SOS].Anzahl+1);
		break;
	case 7: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+12,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+9);
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[SOS].Anzahl+2);
		break;
	case 10: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+19,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+12);
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[SOS].Anzahl+3);
		break;
	case 13: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+21,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+5);
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[SOS].Anzahl+4);
		break;
	case 16: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+28,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+8);
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[SOS].Anzahl+5);
		break;
	case 2: case 5: case 8: case 11: case 14: case 17: 
		Guy.Aktiv   = true;
		Guy.PosScreen.x += 4;
		Guy.Zustand = GUYHINLEGEN;
		AddResource(WASSER,-1);
		AddResource(NAHRUNG,-1);
		AddTime(0,1);
		break;
	case 3: case 6: case 9: case 12: case 15: case 18: 
		Guy.Aktiv   = true;
		Guy.PosScreen.x -= 4;
		Guy.Zustand = GUYAUFSTEHEN;
		AddResource(WASSER,-1);
		AddResource(NAHRUNG,-1);
		AddTime(0,1);
		break;
	case 19:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 20:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Art == 0) || (Scape[Guy.Pos.x][Guy.Pos.y].Art == 4))
			Chance += 1;
		else Chance += 2; //D�rfte nur noch der Strand �brig sein
		Bmp[BUTTSTOP].Phase = -1;
		if (Bmp[SOS].First)
		{
			PapierText = DrawText(SOSHILFE,TXTPAPIER,1);
			Bmp[SOS].First = false;
		}
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkFeuerstelle()
{
	short i;

	if (Scape[Guy.Pos.x][Guy.Pos.y].AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = FEUERSTELLE;
		for (i=0;i<BILDANZ;i++)	
			Scape[Guy.Pos.x][Guy.Pos.y].Rohstoff[i] = Bmp[FEUERSTELLE].Rohstoff[i];
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = Bmp[FEUERSTELLE].Anzahl;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = (short)Bmp[FEUERSTELLE].rcDes.left;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = (short)Bmp[FEUERSTELLE].rcDes.top;
	}
	Scape[Guy.Pos.x][Guy.Pos.y].AkNummer++;
	if (!CheckRohstoff())
	{
		Scape[Guy.Pos.x][Guy.Pos.y].AkNummer--;
		return;
	}
	switch(Scape[Guy.Pos.x][Guy.Pos.y].AkNummer)
	{
	case 1: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+4,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+16);
		break;
	case 2: 
		Guy.Aktiv   = true;
		Guy.PosScreen.x += 4;
		Guy.Zustand = GUYHINLEGEN;
		AddResource(WASSER,-1);
		AddResource(NAHRUNG,-1);
		AddTime(0,1);
		break;
	case 3:
		Guy.Aktiv   = true;
		Guy.PosScreen.x -= 4;
		Guy.Zustand = GUYAUFSTEHEN;
		AddResource(WASSER,-1);
		AddResource(NAHRUNG,-1);
		AddTime(0,1);
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[FEUERSTELLE].Anzahl+1);
		break;
	case 4: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+15);
		break;
	case 5: case 6: case 7:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYBINDENOBEN;
		AddResource(WASSER,-1);
		AddResource(NAHRUNG,-1);
		AddTime(0,1);
		if (Scape[Guy.Pos.x][Guy.Pos.y].AkNummer != 5)
			Scape[Guy.Pos.x][Guy.Pos.y].Phase = 
			  (short)(Bmp[FEUERSTELLE].Anzahl+Scape[Guy.Pos.x][Guy.Pos.y].AkNummer-4);
		break;
	case 8:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 9:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		Bmp[BUTTSTOP].Phase = -1;
		if (Bmp[FEUERSTELLE].First)
		{
			PapierText = DrawText(FEUERSTELLEHILFE,TXTPAPIER,1);
			Bmp[FEUERSTELLE].First = false;
		}
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkHaus1()
{
	short i;

	if (Scape[Guy.Pos.x][Guy.Pos.y].AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
		for (i=0;i<BILDANZ;i++)	
			Scape[Guy.Pos.x][Guy.Pos.y].Rohstoff[i] = Bmp[HAUS1].Rohstoff[i];
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = Bmp[HAUS1].Anzahl;
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = HAUS1;
	}
	Scape[Guy.Pos.x][Guy.Pos.y].AkNummer++;
	if (!CheckRohstoff())
	{
		Scape[Guy.Pos.x][Guy.Pos.y].AkNummer--;
		return;
	}
	switch(Scape[Guy.Pos.x][Guy.Pos.y].AkNummer)
	{
	case 1: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+
			       Bmp[BAUMGROSS].Breite/2-3,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+
				   Bmp[BAUMGROSS].Hoehe+1);
		break;
	case 2: case 3: case 4: case 5: 
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER;
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 6: case 7: case 8: case 9: 
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[HAUS1].Anzahl+1);
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 10: case 11: case 12: case 13: 
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[HAUS1].Anzahl+2);
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 14: case 15: case 16: case 17: 
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[HAUS1].Anzahl+3);
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 18:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 19:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		Bmp[BUTTSTOP].Phase = -1;
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkHaus2()
{
	short i;

	if (Scape[Guy.Pos.x][Guy.Pos.y].AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
		for (i=0;i<BILDANZ;i++)	
			Scape[Guy.Pos.x][Guy.Pos.y].Rohstoff[i] = Bmp[HAUS2].Rohstoff[i];
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = Bmp[HAUS2].Anzahl;
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = HAUS2;
	}
	Scape[Guy.Pos.x][Guy.Pos.y].AkNummer++;
	if (!CheckRohstoff())
	{
		Scape[Guy.Pos.x][Guy.Pos.y].AkNummer--;
		return;
	}
	switch(Scape[Guy.Pos.x][Guy.Pos.y].AkNummer)
	{
	case 1: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+
			       Bmp[BAUMGROSS].Breite/2,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+
				   Bmp[BAUMGROSS].Hoehe+1);
		break;
	case 2: 
		Guy.Aktiv   = true;
		Guy.Zustand = GUYKLETTERN1;
		AddResource(NAHRUNG,-1);
		AddResource(WASSER,-1);
		AddTime(0,1);
		break;
	case 3: case 4: case 5: case 6:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER2;
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 7: case 8: case 9: case 10:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER2;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[HAUS2].Anzahl+1);
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 11: case 12: case 13: case 14:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER2;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[HAUS2].Anzahl+2);
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 15: case 16: case 17: case 18:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER2;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[HAUS2].Anzahl+3);
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 19:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYKLETTERN2;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[HAUS2].Anzahl+4);
		AddResource(NAHRUNG,-1);
		AddResource(WASSER,-1);
		AddTime(0,1);
		break;
	case 20:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 21:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		Bmp[BUTTSTOP].Phase = -1;
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkHaus3()
{
	short i;

	if (Scape[Guy.Pos.x][Guy.Pos.y].AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
		for (i=0;i<BILDANZ;i++)	
			Scape[Guy.Pos.x][Guy.Pos.y].Rohstoff[i] = Bmp[HAUS3].Rohstoff[i];
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = Bmp[HAUS3].Anzahl;
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = HAUS3;
	}
	Scape[Guy.Pos.x][Guy.Pos.y].AkNummer++;
	if (!CheckRohstoff())
	{
		Scape[Guy.Pos.x][Guy.Pos.y].AkNummer--;
		return;
	}
	switch(Scape[Guy.Pos.x][Guy.Pos.y].AkNummer)
	{
	case 1: 
		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+
			       Bmp[BAUMGROSS].Breite/2,
			       Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+
				   Bmp[BAUMGROSS].Hoehe+1);
		break;
	case 2: 
		Guy.Aktiv   = true;
		Guy.Zustand = GUYKLETTERN1;
		AddResource(NAHRUNG,-1);
		AddResource(WASSER,-1);
		AddTime(0,1);
		break;
	case 3: case 4: case 5: case 6:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER2;
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 7: case 8: case 9: case 10:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER2;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[HAUS3].Anzahl+1);
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 11: case 12: case 13: case 14:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER2;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[HAUS3].Anzahl+2);
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 15: case 16: case 17: case 18:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYHAMMER2;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[HAUS3].Anzahl+3);
		AddResource(NAHRUNG,-0.5);
		AddResource(WASSER,-0.5);
		AddTime(0,1);
		break;
	case 19:
		Guy.Aktiv   = true;
		Guy.Zustand = GUYKLETTERN2;
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = (short)(Bmp[HAUS3].Anzahl+4);
		AddResource(NAHRUNG,-1);
		AddResource(WASSER,-1);
		AddTime(0,1);
		break;
	case 20:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		break;
	case 21:
		Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		Bmp[BUTTSTOP].Phase = -1;
		if (Bmp[HAUS3].First)
		{
			PapierText = DrawText(HAUS3HILFE,TXTPAPIER,1);
			Bmp[HAUS3].First = false;
		}
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkSchlafen()
{
	if (Guy.AkNummer == 0)
	{
		Guy.PosAlt = Guy.PosScreen;	//Die Originalposition merken
	}
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ZELT) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
	   		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+3,
			           Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+20);
		else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			     (Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
	   		ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+
			             Bmp[BAUMGROSS].Breite/2+1,
			           Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+
					     Bmp[BAUMGROSS].Hoehe+1);
		break;
	case 2:
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl)) 
		{
			Guy.Aktiv   = true;
			Guy.Zustand = GUYKLETTERN1;
			AddResource(NAHRUNG,-1);
			AddResource(WASSER,-1);
		}
		break;
	case 3:
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ZELT) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase <  Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{
			Guy.Aktiv   = true;
			Guy.Zustand = GUYGEHINZELT;
		}
		else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase <  Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{
			Guy.Aktiv   = true;
			Guy.Zustand = GUYGEHINHAUS;
		}
		else
		{
			Guy.PosScreen.x += 3;
			Guy.Aktiv   = true;
			Guy.Zustand = GUYHINLEGEN;
		}
		break;
	case 4: case 5:
		Guy.Aktiv   = true;
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == ZELT) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{
			if (Guy.AkNummer == 4) Guy.PosScreen.x += 4;
			Guy.Zustand = GUYSCHLAFZELT;
		}
		else if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase < Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{
			if (Guy.AkNummer == 4) Guy.PosScreen.x += 14;
			Guy.Zustand = GUYSCHLAFHAUS;
		}
		else Guy.Zustand = GUYSCHLAFEN;
		AddResource(GESUNDHEIT,5);
		AddTime(0,30);
		break;
	case 6:
		Guy.Aktiv   = true;
		StopSound(WAVSCHNARCHEN);
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase <  Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{			
			Guy.PosScreen.x -= 14;
			Guy.Zustand = GUYGEHAUSHAUS;
		}
		else Guy.Zustand = GUYAUFSTEHEN;
		break;
	case 7:
		if ((Scape[Guy.Pos.x][Guy.Pos.y].Objekt == HAUS3) && 
			(Scape[Guy.Pos.x][Guy.Pos.y].Phase <  Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Anzahl))
		{
			Guy.Aktiv   = true;
			Guy.Zustand = GUYKLETTERN2;
			AddResource(NAHRUNG,-1);
			AddResource(WASSER,-1);
		}
		break;
	case 8:
		ShortRoute(Guy.PosAlt.x,Guy.PosAlt.y);
		Guy.Aktion = AKNICHTS;
		break;
	}
}

void AkAblegen()
{
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
	   ShortRoute(Scape[Guy.Pos.x][Guy.Pos.y].xScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x+14,
		          Scape[Guy.Pos.x][Guy.Pos.y].yScreen+Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y+11);
	   break;
	case 2:
		ChangeBootsFahrt();
		Guy.PosScreen.x = Scape[Guy.Pos.x][Guy.Pos.y].xScreen+
						  Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x + 
			              Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Breite/2;
		Guy.PosScreen.y = Scape[Guy.Pos.x][Guy.Pos.y].yScreen +
						  Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y + 
			              Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Hoehe/2;
		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = -1;
		if      (Scape[Guy.Pos.x-1][Guy.Pos.y].Art == 1) Guy.Pos.x--;
		else if (Scape[Guy.Pos.x][Guy.Pos.y-1].Art == 1) Guy.Pos.y--;
		else if (Scape[Guy.Pos.x+1][Guy.Pos.y].Art == 1) Guy.Pos.x++;
		else if (Scape[Guy.Pos.x][Guy.Pos.y+1].Art == 1) Guy.Pos.y++;
		ShortRoute(((Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].x +
					 Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].x) /2),
				   ((Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].y +
			         Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].y) /2));
	
	break;
	case 3:
		Guy.Aktion = AKNICHTS;
		Guy.PosAlt.x = Guy.PosScreen.x;
		Guy.PosAlt.y = Guy.PosScreen.y;
		break;
	}
}

void AkAnlegen()
{
	Guy.AkNummer++;
	switch(Guy.AkNummer)
	{
	case 1:
		if (Scape[Guy.Pos.x-1][Guy.Pos.y].Art != 1) 
		{
			ShortRoute(((Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].x +
				Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].x) /2),
				((Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].y +
				Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].y) /2));
		}
		else if (Scape[Guy.Pos.x][Guy.Pos.y-1].Art != 1) 
		{
			ShortRoute(((Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].x +
				Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].x) /2),
				((Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].y +
				Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].y) /2));
		}
		else if (Scape[Guy.Pos.x+1][Guy.Pos.y].Art != 1) 
		{
			ShortRoute(((Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].x +
				Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].x) /2),
				((Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].y +
				Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].y) /2));
		}
		else if (Scape[Guy.Pos.x][Guy.Pos.y+1].Art != 1) 
		{
			ShortRoute(((Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].x +
				Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].x) /2),
				((Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].y +
				Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].y) /2));
		}
	   break;
	case 2:
		if      (Scape[Guy.Pos.x-1][Guy.Pos.y].Art != 1) 
		{
			Guy.Pos.x--;
			Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		}
		else if (Scape[Guy.Pos.x][Guy.Pos.y-1].Art != 1) 
		{
			Guy.Pos.y--;
			Scape[Guy.Pos.x][Guy.Pos.y].Phase = 1;
		}
		else if (Scape[Guy.Pos.x+1][Guy.Pos.y].Art != 1) 
		{
			Guy.Pos.x++;
			Scape[Guy.Pos.x][Guy.Pos.y].Phase = 0;
		}
		else if (Scape[Guy.Pos.x][Guy.Pos.y+1].Art != 1) 
		{
			Guy.Pos.y++;
			Scape[Guy.Pos.x][Guy.Pos.y].Phase = 1;
		}

		Scape[Guy.Pos.x][Guy.Pos.y].Objekt = BOOT;
		Scape[Guy.Pos.x][Guy.Pos.y].AkNummer = Bmp[BOOT].AkAnzahl;
			
		ChangeBootsFahrt();
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.x = Guy.PosScreen.x - 
				Scape[Guy.Pos.x][Guy.Pos.y].xScreen - 
				Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Breite/2;
		Scape[Guy.Pos.x][Guy.Pos.y].ObPos.y = Guy.PosScreen.y - 
				Scape[Guy.Pos.x][Guy.Pos.y].yScreen - 
				Bmp[Scape[Guy.Pos.x][Guy.Pos.y].Objekt].Hoehe/2;			   
			
		ShortRoute(((Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][0].x +
					 Scape[Guy.Pos.x][Guy.Pos.y].xScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][2].x) /2),
				   ((Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][1].y +
			         Scape[Guy.Pos.x][Guy.Pos.y].yScreen+EckKoor[Scape[Guy.Pos.x][Guy.Pos.y].Typ][3].y) /2));
	
		break;
	case 3:
		Guy.Aktion = AKNICHTS;
		Guy.PosAlt.x = Guy.PosScreen.x;
		Guy.PosAlt.y = Guy.PosScreen.y;
		break;
	}	
}

void Compute(short MinGroesse, short MaxGroesse) //Groesse der Insel in Anzahl der Landkacheln
{
	short				x,y;
	short				Mittex,Mittey;
	short				l,i,j,m;	// l: Spiralring von Innen aus gez�hlt
	short				Anzahl;		//Anzahl der Landst�cke							
	bool				gefunden;
	bool				CheckRand; //Reicht die Insel bis zum Rand?
	
	Mittex = MAXXKACH / 2-1;
	Mittey = MAXYKACH / 2-1;

	for(m=0;m<1000;m++)	//100mal wiederholen, oder bis eine geeignete Insel gefunden ist
	{
		for (y=0;y<MAXYKACH;y++)
			for (x=0;x<MAXXKACH;x++)
			{
				Scape[x][y].Typ		 = 0;
				Scape[x][y].Art		 = 0;
				Scape[x][y].Hoehe	 = 0;
				Scape[x][y].Markiert = false;
				Scape[x][y].Begehbar = true;
				Scape[x][y].Entdeckt = false;
				Scape[x][y].LaufZeit = 1;
				Scape[x][y].Objekt   = -1;
				Scape[x][y].Reverse  = false;
				Scape[x][y].ObPos.x	 = 0;
				Scape[x][y].ObPos.y	 = 0;
				Scape[x][y].Phase    =-1;
				Scape[x][y].AkNummer = 0;
				Scape[x][y].GPosAlt.x= 0;
				Scape[x][y].GPosAlt.y= 0;
				for (i=0;i<BILDANZ;i++) Scape[x][y].Rohstoff[i] = 0;
				Scape[x][y].Timer    = 0;

			};
		
		x = Mittex;		//Startposition der Berechnung
		y = Mittey;
		Scape[Mittex][Mittey].Typ   = 0;		//Gipfel festlegen (Flach)	
		Scape[Mittex][Mittey].Hoehe = GIPFEL;	// und mit der Hoehe 
		
		for (l=0;l<=Mittey-1;l++)
			{
				if (l >= Mittex) break;
				y = Mittey-l-1;
				//Als erstes den oberen Bereich von links nach rechts durchgehen 
				for (x=Mittex-l;x<=Mittex+l;x++)
				{
					gefunden = false;
					i=0;
					while (! gefunden)		//Passendes Teil finden und Hoehe festlegen
					{
						i+=1;
						if (i==1000) {gefunden=true;}
						
						Scape[x][y].Typ = rand()%13;
						for (j=0;j<10;j++)
						{
							if (! ((Scape[x][y].Typ == 0) || (Scape[x][y].Typ == 1)))
							{
								Scape[x][y].Typ = rand()%13;
							}
						}
						
						if	((x == Mittex-l) || ((x != Mittex-l) 
							&& ((Vierecke[Scape[x][y+1].Typ][1][Scape[x][y].Typ] != 0) 
							&& (Vierecke[Scape[x-1][y].Typ][2][Scape[x][y].Typ] != 0))))
						{
							if (Vierecke[Scape[x][y+1].Typ][1][Scape[x][y].Typ] == 1) 
							{
								Scape[x][y].Hoehe = Scape[x][y+1].Hoehe - 1;
								if (Scape[x][y].Hoehe < 0)
								{
									Scape[x][y].Typ = 0;
									Scape[x][y].Hoehe = 0;
								}
								gefunden = true;
							}
							if (Vierecke[Scape[x][y+1].Typ][1][Scape[x][y].Typ] == 2)
							{
								Scape[x][y].Hoehe = Scape[x][y+1].Hoehe;
								gefunden = true;
							}
							if (Vierecke[Scape[x][y+1].Typ][1][Scape[x][y].Typ] == 3)
							{
								Scape[x][y].Hoehe = Scape[x][y+1].Hoehe + 1;
								gefunden = true;
							}
						}
						//Verzwickte F�lle ausfiltern
						if (((Vierecke[Scape[x][y].Typ][2][3] == 2) && (Vierecke[Scape[x+1][y+1].Typ][1][4] == 2)) ||
							((Vierecke[Scape[x][y].Typ][2][1] == 2) && (Vierecke[Scape[x+1][y+1].Typ][1][2] == 2)))
						{
							gefunden = false;
						}
						//Nebeninseln vermeiden
						if (((Scape[x-1][y].Typ == 0) && (Scape[x-1][y].Hoehe == 0)) &&
							((Scape[x][y+1].Typ == 0) && (Scape[x][y+1].Hoehe == 0)))
						{
							Scape[x][y].Typ		= 0;
							Scape[x][y].Hoehe	= 0;
						}
						
					}
				}
				
				//Teil rechts-oben  
				x =Mittex+l+1;
				y =Mittey-l-1;
				gefunden = false;
				i=0;
				while (! gefunden)		//Passendes Teil finden und Hoehe festlegen
				{
					i+=1;
					if (i==1000) {gefunden=true;}
					
					Scape[x][y].Typ = rand()%13;
					for (j=0;j<10;j++)
					{
						if (! ((Scape[x][y].Typ == 0) || (Scape[x][y].Typ == 5)))
						{
							Scape[x][y].Typ = rand()%13;
						}
					}
					
					if (Vierecke[Scape[x-1][y].Typ][2][Scape[x][y].Typ] == 1) 
					{
						Scape[x][y].Hoehe = Scape[x-1][y].Hoehe - 1;
						if (Scape[x][y].Hoehe < 0)
						{
							Scape[x][y].Typ = 0;
							Scape[x][y].Hoehe = 0;
						}
						gefunden = true;
					}
					if (Vierecke[Scape[x-1][y].Typ][2][Scape[x][y].Typ] == 2)
					{
						Scape[x][y].Hoehe = Scape[x-1][y].Hoehe;
						gefunden = true;
					}
					if (Vierecke[Scape[x-1][y].Typ][2][Scape[x][y].Typ] == 3)
					{
						Scape[x][y].Hoehe = Scape[x-1][y].Hoehe + 1;
						gefunden = true;
					}
					//Verzwickte F�lle ausfiltern
					if (((Vierecke[Scape[x][y].Typ][3][2] == 2) && (Vierecke[Scape[x-1][y+1].Typ][2][3] == 2)) ||
						((Vierecke[Scape[x][y].Typ][3][4] == 2) && (Vierecke[Scape[x-1][y+1].Typ][2][1] == 2)))
					{
						gefunden = false;
					}
					//Nebeninseln vermeiden
					if ((Scape[x-1][y].Typ == 0) && (Scape[x-1][y].Hoehe == 0))
					{
						Scape[x][y].Typ		= 0;
						Scape[x][y].Hoehe	= 0;
					}
				}
				
				//Den rechten Bereich von oben nach unten durchgehen 
				x= Mittex +l+1;
				for (y=Mittey-l;y<=Mittey+l;y++)
				{
					gefunden = false;
					i=0;
					while (! gefunden)		//Passendes Teil finden und Hoehe festlegen
					{
						i+=1;
						if (i==1000) {gefunden=true;}
						
						Scape[x][y].Typ = rand()%13;
						for (j=0;j<10;j++)
						{	
							if (! ((Scape[x][y].Typ == 0) || (Scape[x][y].Typ == 4)))
							{
								Scape[x][y].Typ = rand()%13;
							}
						}
						
						if	((Vierecke[Scape[x-1][y].Typ][2][Scape[x][y].Typ] != 0) 
							&& (Vierecke[Scape[x][y-1].Typ][3][Scape[x][y].Typ] != 0))
						{
							if (Vierecke[Scape[x][y-1].Typ][3][Scape[x][y].Typ] == 1) 
							{
								Scape[x][y].Hoehe = Scape[x][y-1].Hoehe - 1;
								if (Scape[x][y].Hoehe < 0)
								{
									Scape[x][y].Typ = 0;
									Scape[x][y].Hoehe = 0;
								}
								gefunden = true;
							}
							if (Vierecke[Scape[x][y-1].Typ][3][Scape[x][y].Typ] == 2)
							{
								Scape[x][y].Hoehe = Scape[x][y-1].Hoehe;
								gefunden = true;
							}
							if (Vierecke[Scape[x][y-1].Typ][3][Scape[x][y].Typ] == 3)
							{
								Scape[x][y].Hoehe = Scape[x][y-1].Hoehe + 1;
								gefunden = true;
							}
						}
						//Verzwickte F�lle ausfiltern
						if (((Vierecke[Scape[x][y].Typ][3][2] == 2) && (Vierecke[Scape[x-1][y+1].Typ][2][3] == 2)) ||
							((Vierecke[Scape[x][y].Typ][3][4] == 2) && (Vierecke[Scape[x-1][y+1].Typ][2][1] == 2)))
						{
							gefunden = false;
						}
						//Nebeninseln vermeiden
						if (((Scape[x-1][y].Typ == 0) && (Scape[x-1][y].Hoehe == 0)) &&
							((Scape[x][y-1].Typ == 0) && (Scape[x][y-1].Hoehe == 0)))
						{
							Scape[x][y].Typ		= 0;
							Scape[x][y].Hoehe	= 0;
						}
					}
				}
				
				//Teil rechts-unten  
				x = Mittex+l+1;
				y = Mittey+l+1;
				gefunden = false;
				i=0;
				while (! gefunden)		//Passendes Teil finden und Hoehe festlegen
				{
					i+=1;
					if (i==1000) {gefunden=true;}
					
					Scape[x][y].Typ = rand()%13;
					for (j=0;j<10;j++)
					{
						if (! ((Scape[x][y].Typ == 0) || (Scape[x][y].Typ == 8)))
						{
							Scape[x][y].Typ = rand()%13;
						}
					}
					
					if (Vierecke[Scape[x][y-1].Typ][3][Scape[x][y].Typ] == 1) 
					{
						Scape[x][y].Hoehe = Scape[x][y-1].Hoehe - 1;
						if (Scape[x][y].Hoehe < 0)
						{
							Scape[x][y].Typ = 0;
							Scape[x][y].Hoehe = 0;
						}
						gefunden = true;
					}
					if (Vierecke[Scape[x][y-1].Typ][3][Scape[x][y].Typ] == 2)
					{
						Scape[x][y].Hoehe = Scape[x][y-1].Hoehe;
						gefunden = true;
					}
					if (Vierecke[Scape[x][y-1].Typ][3][Scape[x][y].Typ] == 3)
					{
						Scape[x][y].Hoehe = Scape[x][y-1].Hoehe + 1;
						gefunden = true;
					}
					//Verzwickte F�lle ausfiltern
					if (((Vierecke[Scape[x][y].Typ][0][1] == 2) && (Vierecke[Scape[x-1][y-1].Typ][3][2] == 2)) ||
						((Vierecke[Scape[x][y].Typ][0][3] == 2) && (Vierecke[Scape[x-1][y-1].Typ][3][4] == 2)))
					{
						gefunden = false;
					}
					//Nebeninsel vermeiden
					if ((Scape[x][y-1].Typ == 0) && (Scape[x][y-1].Hoehe == 0))
					{
						Scape[x][y].Typ		= 0;
						Scape[x][y].Hoehe	= 0;
					}
				}
				
				//Den unteren Bereich von rechts nach links durchgehen 
				y = Mittey+l+1;
				for (x=Mittex+l;x>=Mittex-l;x--)
				{
					gefunden = false;
					i=0;
					while (! gefunden)		//Passendes Teil finden und Hoehe festlegen
					{
						i+=1;
						if (i==1000) {gefunden=true;}
						
						Scape[x][y].Typ = rand()%13;
						for (j=0;j<10;j++)
						{
							if (! ((Scape[x][y].Typ == 0) || (Scape[x][y].Typ == 3)))
							{
								Scape[x][y].Typ = rand()%13;
							}
						}
						
						if	((Vierecke[Scape[x][y-1].Typ][3][Scape[x][y].Typ] != 0) 
							&& (Vierecke[Scape[x+1][y].Typ][0][Scape[x][y].Typ] != 0))
						{
							if (Vierecke[Scape[x][y-1].Typ][3][Scape[x][y].Typ] == 1) 
							{
								Scape[x][y].Hoehe = Scape[x][y-1].Hoehe - 1;
								if (Scape[x][y].Hoehe < 0)
								{
									Scape[x][y].Typ = 0;
									Scape[x][y].Hoehe = 0;
								}
								gefunden = true;
							}
							if (Vierecke[Scape[x][y-1].Typ][3][Scape[x][y].Typ] == 2)
							{
								Scape[x][y].Hoehe = Scape[x][y-1].Hoehe;
								gefunden = true;
							}
							if (Vierecke[Scape[x][y-1].Typ][3][Scape[x][y].Typ] == 3)
							{
								Scape[x][y].Hoehe = Scape[x][y-1].Hoehe + 1;
								gefunden = true;
							}
						}
						//Verzwickte F�lle ausfiltern
						if (((Vierecke[Scape[x][y].Typ][0][1] == 2) && (Vierecke[Scape[x-1][y-1].Typ][3][2] == 2)) ||
							((Vierecke[Scape[x][y].Typ][0][3] == 2) && (Vierecke[Scape[x-1][y-1].Typ][3][4] == 2)))
						{
							gefunden = false;
						}
						//Nebeninseln vermeiden
						if (((Scape[x+1][y].Typ == 0) && (Scape[x+1][y].Hoehe == 0)) &&
							((Scape[x][y-1].Typ == 0) && (Scape[x][y-1].Hoehe == 0)))
						{
							Scape[x][y].Typ		= 0;
							Scape[x][y].Hoehe	= 0;
						}
					}
				}
				
				//Teil links-unten  
				x = Mittex-l-1;
				y = Mittey+l+1;
				gefunden = false;
				i=0;
				while (! gefunden)		//Passendes Teil finden und Hoehe festlegen
				{
					i+=1;
					if (i==1000) {gefunden=true;}
					
					Scape[x][y].Typ = rand()%13;
					for (j=0;j<10;j++)
					{
						if (! ((Scape[x][y].Typ == 0) || (Scape[x][y].Typ == 7)))
						{
							Scape[x][y].Typ = rand()%13;
						}
					}
					
					if (Vierecke[Scape[x+1][y].Typ][0][Scape[x][y].Typ] == 1) 
					{
						Scape[x][y].Hoehe = Scape[x+1][y].Hoehe - 1;
						if (Scape[x][y].Hoehe < 0)
						{
							Scape[x][y].Typ = 0;
							Scape[x][y].Hoehe = 0;
						}
						gefunden = true;
					}
					if (Vierecke[Scape[x+1][y].Typ][0][Scape[x][y].Typ] == 2)
					{
						Scape[x][y].Hoehe = Scape[x+1][y].Hoehe;
						gefunden = true;
					}
					if (Vierecke[Scape[x+1][y].Typ][0][Scape[x][y].Typ] == 3)
					{
						Scape[x][y].Hoehe = Scape[x+1][y].Hoehe + 1;
						gefunden = true;
					}
					//Verzwickte F�lle ausfiltern
					if (((Vierecke[Scape[x][y].Typ][1][2] == 2) && (Vierecke[Scape[x+1][y-1].Typ][0][3] == 2)) ||
						((Vierecke[Scape[x][y].Typ][1][4] == 2) && (Vierecke[Scape[x+1][y-1].Typ][0][1] == 2)))
					{
						gefunden = false;
					}
					//Nebeninsel vermeiden
					if ((Scape[x+1][y].Typ == 0) && (Scape[x+1][y].Hoehe == 0))
					{
						Scape[x][y].Typ		= 0;
						Scape[x][y].Hoehe	= 0;
					}
				}
				
				//Den linken Bereich von unten nach oben durchgehen 
				x = Mittex-l-1;
				for (y=Mittey+l;y>=Mittey-l-1;y--)
				{
					gefunden = false;
					i=0;
					while (! gefunden)		//Passendes Teil finden und Hoehe festlegen
					{
						i+=1;
						if (i==1000) {gefunden=true;}
						Scape[x][y].Typ = rand()%13;
						for (j=0;j<10;j++)
						{
							if (! ((Scape[x][y].Typ == 0) || (Scape[x][y].Typ == 2)))
							{
								Scape[x][y].Typ = rand()%13;
							}
						}
						
						if	((Vierecke[Scape[x+1][y].Typ][0][Scape[x][y].Typ] != 0) 
							&& (Vierecke[Scape[x][y+1].Typ][1][Scape[x][y].Typ] != 0))
						{
							if (Vierecke[Scape[x][y+1].Typ][1][Scape[x][y].Typ] == 1) 
							{
								Scape[x][y].Hoehe = Scape[x][y+1].Hoehe - 1;
								if (Scape[x][y].Hoehe < 0)
								{
									Scape[x][y].Typ = 0;
									Scape[x][y].Hoehe = 0;
								}
								gefunden = true;
							}
							if (Vierecke[Scape[x][y+1].Typ][1][Scape[x][y].Typ] == 2)
							{
								Scape[x][y].Hoehe = Scape[x][y+1].Hoehe;
								gefunden = true;
							}
							if (Vierecke[Scape[x][y+1].Typ][1][Scape[x][y].Typ] == 3)
							{
								Scape[x][y].Hoehe = Scape[x][y+1].Hoehe + 1;
								gefunden = true;
							}
						}
						//Verzwickte F�lle ausfiltern
						if (((Vierecke[Scape[x][y].Typ][1][2] == 2) && (Vierecke[Scape[x+1][y-1].Typ][0][3] == 2)) ||
							((Vierecke[Scape[x][y].Typ][1][4] == 2) && (Vierecke[Scape[x+1][y-1].Typ][0][1] == 2)))
						{
							gefunden = false;
						}
						//Nebeninseln vermeiden
						if (((Scape[x+1][y].Typ == 0) && (Scape[x+1][y].Hoehe == 0)) &&
							((Scape[x][y+1].Typ == 0) && (Scape[x][y+1].Hoehe == 0)))
						{
							Scape[x][y].Typ		= 0;
							Scape[x][y].Hoehe	= 0;
						}
					}
				}
			}
			Anzahl = 0;
			CheckRand = true;
			for (y=0;y<MAXYKACH;y++)		//Landfl�che z�hlen
				for (x=0;x<MAXXKACH;x++)	
				{
					if (Scape[x][y].Hoehe > 0) Anzahl++;
					
					if (Scape[x][y].Typ == 0) Scape[x][y].LaufZeit = 1;
					else Scape[x][y].LaufZeit = 2;
					
					if ((Scape[x][y].Typ != 0) && 
						((x<=2) || (x>=MAXXKACH-2) || (y<=2) || (y>=MAXYKACH-2))) 
						CheckRand=false; 
				}
			if ((Anzahl > MinGroesse) && (Anzahl < MaxGroesse) && (CheckRand)) break;
		}	
}

void Meer()	//Das Meer und den Strand bestimmen
{
	short				x,y;
	short				Anzahl; //Anzahl von angrenzenden Landst�cken
	
	for (y=0;y<MAXYKACH;y++)//Meer rausfinden
		for (x=0;x<MAXXKACH;x++)
		{
			if	((Scape[x][y].Hoehe < 0) || 
				((Scape[x][y].Hoehe == 0) && (Scape[x][y].Typ == 0))) 
			{
				Scape[x][y].Typ = 0;
				Scape[x][y].Hoehe = 0;
				Scape[x][y].Art = 1;		
				Scape[x][y].Objekt = MEERWELLEN;
				Scape[x][y].ObPos.x = (short)Bmp[MEERWELLEN].rcDes.left;
				Scape[x][y].ObPos.y = (short)Bmp[MEERWELLEN].rcDes.top;
				if (rand()%2 == 0) Scape[x][y].Reverse = true;
				Scape[x][y].Begehbar = false;
				Scape[x][y].Phase = (float)(Bmp[Scape[x][y].Objekt].Anzahl-
						            rand()%(Bmp[Scape[x][y].Objekt].Anzahl)-1); 
			}
		}
	for (y=1;y<MAXYKACH-1;y++)//Strand rausfinden
		for (x=1;x<MAXXKACH-1;x++) //Alle M�glichkeiten durchgehen
		{
			if	((Scape[x][y].Typ == 0) && (Scape[x][y].Hoehe == 0)) 
			{
				Anzahl = 0;	//Anzahl rausfinden
				if  (Scape[x-1][y].Typ != 0) Anzahl++;
				if  (Scape[x-1][y-1].Typ != 0) Anzahl++;
				if  (Scape[x][y-1].Typ != 0) Anzahl++;
				if  (Scape[x+1][y-1].Typ != 0) Anzahl++;
				if  (Scape[x+1][y].Typ != 0) Anzahl++;
				if  (Scape[x+1][y+1].Typ != 0) Anzahl++;
				if  (Scape[x][y+1].Typ != 0) Anzahl++;
				if  (Scape[x-1][y+1].Typ != 0) Anzahl++;
				
				if ((Anzahl >= 1) && (Anzahl < 6))
				{
					Scape[x][y].Art = 2;
					Scape[x][y].Objekt = -1;
					Scape[x][y].Reverse = false;
					Scape[x][y].Begehbar = true;
					Scape[x][y].Phase = -1;
					continue;
				}
				if (Anzahl >= 6)
				{
					Scape[x][y].Art = 3;
					Scape[x][y].Objekt = -1;
					Scape[x][y].Reverse = false;
					Scape[x][y].Begehbar = false;
					Scape[x][y].Phase = -1;
					continue;
				}
				Scape[x][y].Art = 1;		//sonst Meer
				Scape[x][y].Objekt = MEERWELLEN;
				Scape[x][y].ObPos.x = (short)Bmp[MEERWELLEN].rcDes.left;
				Scape[x][y].ObPos.y = (short)Bmp[MEERWELLEN].rcDes.top;
				Scape[x][y].Phase = (float)(Bmp[Scape[x][y].Objekt].Anzahl-
						            rand()%(Bmp[Scape[x][y].Objekt].Anzahl)-1); 
				if (rand()%2 == 0) Scape[x][y].Reverse = true;
				Scape[x][y].Begehbar = false;
			}
		}
		
}

void ChangeBootsFahrt()
{
	short x,y;
	
	BootsFahrt = !BootsFahrt;
	//Begehbarkeit umdrehen
	for (y=0;y<MAXYKACH;y++)
		for (x=0;x<MAXXKACH;x++) Scape[x][y].Begehbar = !Scape[x][y].Begehbar;
}

void Fade(short RP,short GP,short BP)
{
	short blackloop;
	
	for(blackloop=0;blackloop<256;blackloop++)
	{
		DDGammaRamp.red[blackloop]=DDGammaOld.red[blackloop]*RP/100;
		DDGammaRamp.green[blackloop]=DDGammaOld.green[blackloop]*GP/100;
		DDGammaRamp.blue[blackloop]=DDGammaOld.blue[blackloop]*BP/100; 
	}
	lpDDGammaControl->SetGammaRamp(0, &DDGammaRamp); 
}

void CheckRohr(short x, short y)
{
	Scape[x][y].Phase = 1;
	if (Scape[x][y].Art == 0)   Scape[x][y]  .Art = 4;
	if (Scape[x-1][y].Art == 0) Scape[x-1][y].Art = 4;
	if (Scape[x-1][y-1].Art == 0) Scape[x-1][y-1].Art = 4;
	if (Scape[x][y-1].Art == 0) Scape[x][y-1].Art = 4;
	if (Scape[x+1][y-1].Art == 0) Scape[x+1][y-1].Art = 4;
	if (Scape[x+1][y].Art == 0) Scape[x+1][y].Art = 4;
	if (Scape[x+1][y+1].Art == 0) Scape[x+1][y+1].Art = 4;
	if (Scape[x][y+1].Art == 0) Scape[x][y+1].Art = 4;
	if (Scape[x-1][y+1].Art == 0) Scape[x-1][y+1].Art = 4;

	if ((Scape[x-1][y].Objekt == ROHR) && (Scape[x-1][y].Phase == 0)) CheckRohr(x-1,y);
	if ((Scape[x][y-1].Objekt == ROHR) && (Scape[x][y-1].Phase == 0)) CheckRohr(x,y-1);
	if ((Scape[x+1][y].Objekt == ROHR) && (Scape[x+1][y].Phase == 0)) CheckRohr(x+1,y);
	if ((Scape[x][y+1].Objekt == ROHR) && (Scape[x][y+1].Phase == 0)) CheckRohr(x,y+1);
}

void FillRohr()
{
	short x,y;

	for (y=0;y<MAXYKACH;y++)
		for (x=0;x<MAXXKACH;x++) 
		{
			if ((Scape[x][y].Objekt == ROHR) && (Scape[x][y].Phase < Bmp[ROHR].Anzahl))
				Scape[x][y].Phase = 0;
			if (Scape[x][y].Art == 4)   Scape[x][y].Art = 0;
			if ((Scape[x][y].Objekt >= SCHLEUSE1) && (Scape[x][y].Objekt <= SCHLEUSE6))
			{
				Scape[x][y].Objekt -= 14;
				Scape[x][y].ObPos.x = (short)Bmp[Scape[x][y].Objekt].rcDes.left;
				Scape[x][y].ObPos.y = (short)Bmp[Scape[x][y].Objekt].rcDes.top;
			}
		}
	//StartRohr finden
	for (y=0;y<MAXYKACH;y++)
		for (x=0;x<MAXXKACH;x++) 
		{
			if  ((Scape[x][y].Objekt >= FLUSS1) && (Scape[x][y].Objekt <= SCHLEUSE6))
			{
				if (Scape[x][y].Art == 0)   Scape[x][y]  .Art = 4;
				if (Scape[x-1][y].Art == 0) Scape[x-1][y].Art = 4;
				if (Scape[x-1][y-1].Art == 0) Scape[x-1][y-1].Art = 4;
				if (Scape[x][y-1].Art == 0) Scape[x][y-1].Art = 4;
				if (Scape[x+1][y-1].Art == 0) Scape[x+1][y-1].Art = 4;
				if (Scape[x+1][y].Art == 0) Scape[x+1][y].Art = 4;
				if (Scape[x+1][y+1].Art == 0) Scape[x+1][y+1].Art = 4;
				if (Scape[x][y+1].Art == 0) Scape[x][y+1].Art = 4;
				if (Scape[x-1][y+1].Art == 0) Scape[x-1][y+1].Art = 4;
			}
			if ((Scape[x][y].Objekt != ROHR) || (Scape[x][y].Phase >= Bmp[ROHR].Anzahl))
				continue;
			if ((Scape[x-1][y].Objekt >= FLUSS5) && (Scape[x-1][y].Objekt <= FLUSS10))
			{
				Scape[x-1][y].Objekt += 14;
				Scape[x-1][y].ObPos.x = (short)Bmp[Scape[x-1][y].Objekt].rcDes.left;
				Scape[x-1][y].ObPos.y = (short)Bmp[Scape[x-1][y].Objekt].rcDes.top;
				CheckRohr(x,y);
			}
			else if ((Scape[x-1][y].Objekt >= SCHLEUSE1) && (Scape[x-1][y].Objekt <= SCHLEUSE6))
			{
				 CheckRohr(x,y);
			}
			if ((Scape[x][y-1].Objekt >= FLUSS5) && (Scape[x][y-1].Objekt <= FLUSS10))
			{
				Scape[x][y-1].Objekt += 14;
				Scape[x][y-1].ObPos.x = (short)Bmp[Scape[x][y-1].Objekt].rcDes.left;
				Scape[x][y-1].ObPos.y = (short)Bmp[Scape[x][y-1].Objekt].rcDes.top;
				CheckRohr(x,y);
			}
			else if ((Scape[x][y-1].Objekt >= SCHLEUSE1) && (Scape[x][y-1].Objekt <= SCHLEUSE6))
			{
				 CheckRohr(x,y);
			}
			if ((Scape[x+1][y].Objekt >= FLUSS5) && (Scape[x+1][y].Objekt <= FLUSS10))
			{
				Scape[x+1][y].Objekt += 14;
				Scape[x+1][y].ObPos.x = (short)Bmp[Scape[x+1][y].Objekt].rcDes.left;
				Scape[x+1][y].ObPos.y = (short)Bmp[Scape[x+1][y].Objekt].rcDes.top;
			    CheckRohr(x,y);
			}
			else if ((Scape[x+1][y].Objekt >= SCHLEUSE1) && (Scape[x+1][y].Objekt <= SCHLEUSE6))
			{
				 CheckRohr(x,y);
			}
		    if ((Scape[x][y+1].Objekt >= FLUSS5) && (Scape[x][y+1].Objekt <= FLUSS10))
			{
				Scape[x][y+1].Objekt += 14;
				Scape[x][y+1].ObPos.x = (short)Bmp[Scape[x][y+1].Objekt].rcDes.left;
				Scape[x][y+1].ObPos.y = (short)Bmp[Scape[x][y+1].Objekt].rcDes.top;
				CheckRohr(x,y);
			}
			else if ((Scape[x][y+1].Objekt >= SCHLEUSE1) && (Scape[x][y+1].Objekt <= SCHLEUSE6))
			{
				 CheckRohr(x,y);
			}
			
		}
		//Felder auf trockenen Wiesen l�schen
	for (y=0;y<MAXYKACH;y++)
		for (x=0;x<MAXXKACH;x++) 
		{
			if ((Scape[x][y].Objekt == FELD) && (Scape[x][y].Art == 0))
			{
				Scape[x][y].Objekt   =-1;
				Scape[x][y].ObPos.x	 = 0;
				Scape[x][y].ObPos.y	 = 0;
				Scape[x][y].Phase    =-1;
				Scape[x][y].AkNummer = 0;
			}
		}
	Generate();

}

bool CheckFluss(short x, short y) //Nachpr�fen ob auf aktuellem Teil ein Fluss ist (Nur f�r die Fluss-Routine)
{
	short i,j;
	
	
	for (i=0;i<FLUSSANZAHL;i++) for (j=0;j<MAXFLUSS;j++)
	{
		if ((x == Flusslauf[i][j].x) && (y == Flusslauf[i][j].y)) return true;
	}
	return false;
}


void Fluss() //Anzahl der Fl�sse und der minimale L�nge
{
	short	i,j,k,l,l2,m,o; 
	short   Richtung; //Aktuelle Fliesrichtung von 0-3
	short	x0,y0,x1,x2,y1,y2;	  //x2,y2 Koordinate des zu pr�fenden Teils
	bool	gefunden,fertig,Strand;
	FLUSSLAUF Flusstmp[MAXFLUSS]; //Zum zwischenspeichern des Versuchs
	short Laengetmp;
	
	for (m=0;m<FLUSSANZAHL;m++) for (j=0;j<MAXFLUSS;j++) 
	{
		Flusslauf[m][j].x=-1;
		Flusslauf[m][j].y=-1;
	}
	
	for (m=0;m<FLUSSANZAHL;m++)
	{
		fertig			= false;
		Laengetmp		= 0;
		for (j=0;j<MAXFLUSS;j++) 
		{
			Flusstmp[j].x = -1;
			Flusstmp[j].y = -1;
		}
		for (k=0;k<1000;k++)
		{
			for(o=0;o<10000;o++)
			{
				gefunden = true;
				
				x0 = rand()%MAXXKACH; //geeignete Quelle bestimmen
				y0 = rand()%MAXYKACH;
				if (CheckFluss(x0,y0)) gefunden = false;
				if ((Scape[x0][y0].Typ != 0) ||
					(Scape[x0][y0].Hoehe < 2)) gefunden = false;
				if (gefunden) break;
			}
			if (! gefunden) {MessageBeep(MB_OK);break;}	//Wenn keine Quelle mehr gefunden aufh�ren
			Flusslauf[m][0].x = x0;
			Flusslauf[m][0].y = y0;
			Strand = false;
			for (i=1;i<MAXFLUSS;i++)
			{
				gefunden = false;
				if (! Strand) Richtung = rand()%4; //Auf dem Strand geradeausfliessen
				for (l2=0;l2<4;l2++)
				{
					l=(Richtung+l2)%4;	 //Im Urzeigersinn nachpr�fen und bei der vorgegeben Richtung anfangen
					
					x1 = Flusslauf[m][i-1].x;
					y1 = Flusslauf[m][i-1].y;
					
					if (l==0)
					{
						x2 = x1-1;
						y2 = y1;
						if (((Scape[x1][y1].Typ == 0) || (Scape[x1][y1].Typ == 2)) &&	
							((Scape[x2][y2].Typ == 0) || (Scape[x2][y2].Typ == 2)))
						{
							gefunden = (! CheckFluss(x2,y2));
							if (gefunden) break; 
						}
					}
					if (l==1)
					{
						x2 = x1;
						y2 = y1-1;
						if (((Scape[x1][y1].Typ == 0) || (Scape[x1][y1].Typ == 1)) &&	
							((Scape[x2][y2].Typ == 0) || (Scape[x2][y2].Typ == 1)))
						{
							gefunden = (! CheckFluss(x2,y2));
							if (gefunden) break; 
						}
					}
					if (l==2)
					{
						x2 = x1+1;
						y2 = y1;
						if (((Scape[x1][y1].Typ == 0) || (Scape[x1][y1].Typ == 4)) &&	
							((Scape[x2][y2].Typ == 0) || (Scape[x2][y2].Typ == 4)))
						{
							gefunden = (! CheckFluss(x2,y2));
							if (gefunden) break; ;
						}
					}	
					if (l==3)
					{
						x2 = x1;
						y2 = y1+1;
						if (((Scape[x1][y1].Typ == 0) || (Scape[x1][y1].Typ == 3)) &&
							((Scape[x2][y2].Typ == 0) || (Scape[x2][y2].Typ == 3))) 
						{
							gefunden = (! CheckFluss(x2,y2));
							if (gefunden) break; 
						}
					}
				}
				if (!gefunden) break;
				
				Flusslauf[m][i].x = x2;
				Flusslauf[m][i].y = y2;
				Richtung = l;
				
				if ((Scape[Flusslauf[m][i].x][Flusslauf[m][i].y].Art == 2) &&	//Auf Strand die Richtung beibehalten
					(Scape[Flusslauf[m][i].x][Flusslauf[m][i].y].Typ == 0)) 
				{
					if (Strand == true) break;	//Nur ein Strandst�ck �berfliessen
					else Strand = true;
				}
				
				if ((Scape[Flusslauf[m][i].x][Flusslauf[m][i].y].Art == 1) &&	//im meer aufh�ren
					(Scape[Flusslauf[m][i].x][Flusslauf[m][i].y].Typ == 0)) 
				{
					fertig = true;	
					break;
				}
			}
			if (fertig) 
			{
				if (i>Laengetmp) 
				{
					//neue Variante speichern
					if (gefunden) Laengetmp = i; else Laengetmp = i-1;
					for (j=0;j<=Laengetmp;j++) 
					{
						Flusstmp[j].x = Flusslauf[m][j].x;
						Flusstmp[j].y = Flusslauf[m][j].y;
					}
				}
			}
			for (i=0;i<MAXFLUSS;i++)
			{
				Flusslauf[m][i].x = -1;
				Flusslauf[m][i].y = -1;
			}
			i = 0;
			fertig = false;
			
		}
		//Den l�ngsten Fluss nehmen
		Flusslaenge[m] = Laengetmp;
		for (j=0;j<=Flusslaenge[m];j++) 
		{
			Flusslauf[m][j].x = Flusstmp[j].x;
			Flusslauf[m][j].y = Flusstmp[j].y;
		}
		
		//Die richtigen Wasserkacheln ausw�hlen
		x0,y0,x1,y1,x2,y2 = -1;
		for (m=0;m<FLUSSANZAHL;m++)
		{	
			for (i=0;i<=Flusslaenge[m];i++)
			{
				//F�r die Kachel, einen Vorgang davor
				Scape[x1][y1].ObPos.x = (short)Bmp[Scape[x1][y1].Objekt].rcDes.left;
				Scape[x1][y1].ObPos.y = (short)Bmp[Scape[x1][y1].Objekt].rcDes.top;

				x1 =Flusslauf[m][i].x;
				y1 =Flusslauf[m][i].y;
								
				Scape[x1][y1].Phase   = 0;

				if (Scape[x1][y1].Art == 0)   Scape[x1][y1]  .Art = 4;
				if (Scape[x1-1][y1].Art == 0) Scape[x1-1][y1].Art = 4;
				if (Scape[x1-1][y1-1].Art == 0) Scape[x1-1][y1-1].Art = 4;
				if (Scape[x1][y1-1].Art == 0) Scape[x1][y1-1].Art = 4;
				if (Scape[x1+1][y1-1].Art == 0) Scape[x1+1][y1-1].Art = 4;
				if (Scape[x1+1][y1].Art == 0) Scape[x1+1][y1].Art = 4;
				if (Scape[x1+1][y1+1].Art == 0) Scape[x1+1][y1+1].Art = 4;
				if (Scape[x1][y1+1].Art == 0) Scape[x1][y1+1].Art = 4;
				if (Scape[x1-1][y1+1].Art == 0) Scape[x1-1][y1+1].Art = 4;
				
				if (i < Flusslaenge[m])
				{
					x2 =Flusslauf[m][i+1].x;
					y2 =Flusslauf[m][i+1].y;
				}
				
				if (i!=0)  
				{	
					x0 =Flusslauf[m][i-1].x;
					y0 =Flusslauf[m][i-1].y;
				}
				else
				{
					//Quellen
					if (x2>x1) 
					{
						Scape[x1][y1].Objekt = QUELLE1;
						continue;
					}
					if (x2<x1)
					{
						Scape[x1][y1].Objekt = QUELLE4;
						continue;
					}
					if (y2>y1) 
					{
						Scape[x1][y1].Objekt = QUELLE2;
						continue;
					}
					if (y2<y1)
					{
						Scape[x1][y1].Objekt = QUELLE3;
						continue;
					}
				}
				
				//Alle M�glichkeiten durchgehen
				
				if (Scape[x1][y1].Typ ==1) Scape[x1][y1].Objekt = FLUSS1;
				if (Scape[x1][y1].Typ ==2) Scape[x1][y1].Objekt = FLUSS2;
				if (Scape[x1][y1].Typ ==3) Scape[x1][y1].Objekt = FLUSS3;
				if (Scape[x1][y1].Typ ==4) Scape[x1][y1].Objekt = FLUSS4;
				
				if (Scape[x1][y1].Typ ==0)
				{
					if ((x0 < x1) && (y0 == y1))
					{
						if (Scape[x1][y1].Art == 2) Scape[x1][y1].Objekt = MUENDUNG3; //M�ndung
						else
						{
							if ((x1 < x2) && (y1 == y2)) Scape[x1][y1].Objekt = FLUSS5;
							if ((x1 == x2) && (y1 < y2)) Scape[x1][y1].Objekt = FLUSS7;
							if ((x1 == x2) && (y1 > y2)) Scape[x1][y1].Objekt = FLUSS9;
						}
					}
					if ((x0 == x1) && (y0 < y1))
					{
						if (Scape[x1][y1].Art == 2) Scape[x1][y1].Objekt = MUENDUNG4; //M�ndung
						else
						{
							if ((x1 < x2) && (y1 == y2)) Scape[x1][y1].Objekt = FLUSS8;
							if ((x1 == x2) && (y1 < y2)) Scape[x1][y1].Objekt = FLUSS6;
							if ((x1 > x2) && (y1 == y2)) 
							{
								Scape[x1][y1].Objekt = FLUSS9;
								Scape[x1][y1].Reverse = true;
							}
						}
					}
					if ((x0 > x1) && (y0 == y1))
					{
						if (Scape[x1][y1].Art == 2) Scape[x1][y1].Objekt =MUENDUNG1; //M�ndung
						else
						{
							if ((x1 > x2) && (y1 == y2)) Scape[x1][y1].Objekt = FLUSS5;
							if ((x1 == x2) && (y1 < y2)) Scape[x1][y1].Objekt = FLUSS10;
							if ((x1 == x2) && (y1 > y2)) Scape[x1][y1].Objekt = FLUSS8;
							Scape[x1][y1].Reverse = true;
						}
					}
					if ((x0 == x1) && (y0 > y1))
					{
						if (Scape[x1][y1].Art == 2) Scape[x1][y1].Objekt = MUENDUNG2; //M�ndung
						else
						{
							if ((x1 == x2) && (y1 > y2)) Scape[x1][y1].Objekt = FLUSS6;
							if ((x1 > x2) && (y1 == y2)) Scape[x1][y1].Objekt = FLUSS7;
							Scape[x1][y1].Reverse = true;
							if ((x1 < x2) && (y1 == y2)) 
							{
								Scape[x1][y1].Objekt = FLUSS10;
								Scape[x1][y1].Reverse = false;
							}
						}
					}
				}
			}
			//F�r das letzte Flussst�ck
			Scape[x1][y1].ObPos.x = (short)Bmp[Scape[x1][y1].Objekt].rcDes.left;
			Scape[x1][y1].ObPos.y = (short)Bmp[Scape[x1][y1].Objekt].rcDes.top;
		}
	}
}

void Baeume(short Prozent)
{
	short				x,y;		//Diese Kachel wird angeschaut
	ZWEID				Erg;
	ZWEID				Pos;		//Da steht der Baum
	short				r;			//random speicherung
	bool				einGrosserBaum = false;	//gibt es bereits einen gro�en Baum

	for (y=0;y<MAXYKACH;y++)//Alle Kacheln durchgehen
		for (x=0;x<MAXXKACH;x++)
		{
			if ((Scape[x][y].Objekt != -1) || 
				((Scape[x][y].Art == 3) && (Scape[x][y].Typ ==0))) continue;
				//Wenn schon ein Objekt da ist oder Treibsand ist, dann mit n�chsten Teil weitermachen
			if (rand()%(100/Prozent) != 0) continue; //Die Wahrscheinlichkeit f�r einen Baum bestimmen
			while(1)
			{
				Pos.x = rand()%KXPIXEL;
				Pos.y = rand()%KYPIXEL;
				Erg = GetKachel(Scape[x][y].xScreen+Pos.x,Scape[x][y].yScreen+Pos.y);
				if ((Erg.x == x) && (Erg.y == y)) break;
			}
			if ((Scape[x][y].Art == 2) && (Scape[x][y].Typ ==0))//Bei Strand nur Palmen nehmen
			{
				Scape[x][y].Objekt  = BAUM2;
			}
			else
			{
				r = rand()%5;
				Scape[x][y].Objekt  = BAUM1+r;
				if ((rand()%50 == 1) || (!einGrosserBaum))  
				{
					Scape[x][y].Objekt = BAUMGROSS;
					einGrosserBaum = true;
				}
			}
			//Linke obere Ecke speichern
			Scape[x][y].ObPos.x = Pos.x-(short)(Bmp[Scape[x][y].Objekt].Breite)/2;	
			Scape[x][y].ObPos.y = Pos.y-(short)(Bmp[Scape[x][y].Objekt].Hoehe);
			//Startphase
			if (Scape[x][y].Objekt == BUSCH) 
				Scape[x][y].Phase = (float)Bmp[Scape[x][y].Objekt].Anzahl-1; 
			else Scape[x][y].Phase = (float)(Bmp[Scape[x][y].Objekt].Anzahl-
						rand()%(Bmp[Scape[x][y].Objekt].Anzahl)-1); 

		}
}

void Piratenwrack()
{
	short x,y,i,Richtung;

	Richtung = rand()%3;
	switch(Richtung)
	{
	case 0:
		x = MAXXKACH/2;
		for (i=0;i<MAXYKACH;i++)
		{
			if (Scape[x][i].Art != 1)
			{
				y = i-1;
				break;
			}
		}
		break;
	case 1:
		y = MAXYKACH/2;
		for (i=MAXXKACH-1;i>=0;i--)
		{
			if (Scape[i][y].Art != 1)
			{
				x = i+1;
				break;
			}
		}
		break;
	case 2:
		x = MAXXKACH/2;
		for (i=MAXYKACH-1;i>=0;i--)
		{
			if (Scape[x][i].Art != 1)
			{
				y = i+1;
				break;
			}
		}
		break;
	}
	Scape[x][y].Objekt = WRACK2;
	Scape[x][y].ObPos.x = (short)Bmp[WRACK2].rcDes.left;
	Scape[x][y].ObPos.y = (short)Bmp[WRACK2].rcDes.top;
}

void Schatz()
{
	short				x,y,i,j;		//Diese Kachel wird angeschaut
	RGBSTRUCT			rgbleft,rgbtop,rgbright,rgbbottom;   
	
	while(1)
    {
		x = rand()%(MAXXKACH-1);
		y = rand()%(MAXYKACH-1);
		//nur auf flachen Kacheln ohne Objekt
		if ((Scape[x][y].Objekt == -1) && (Scape[x][y].Typ ==0)
			&& (Scape[x][y].Art != 3))
		{
			if (SchatzPos.x == -1)
			{
				SchatzPos.x = x;
				SchatzPos.y = y;
			}
			
			lpDDSScape->Lock(null,&ddsd,DDLOCK_WAIT,null);
			lpDDSSchatzkarte->Lock(null,&ddsd2,DDLOCK_WAIT,null);
									
			for (i=0;i<SKARTEX;i++)
				for (j=0;j<SKARTEY;j++)
				{
					GetPixel((short)(i+Scape[SchatzPos.x][SchatzPos.y].xScreen-SKARTEX/2+KXPIXEL/2),
						     (short)(j+Scape[SchatzPos.x][SchatzPos.y].yScreen-SKARTEY/2+30),&ddsd);
					PutPixel(i,j,RGB2DWORD((rgbStruct.r*30+rgbStruct.g*59+rgbStruct.b*11)/100,
										   (rgbStruct.r*30+rgbStruct.g*59+rgbStruct.b*11)/100,
										   (rgbStruct.r*30+rgbStruct.g*59+rgbStruct.b*11)/100*3/4), &ddsd2);
				}

			lpDDSScape->Unlock(null);
			lpDDSSchatzkarte->Unlock(null);
			
			rcRectsrc  = Bmp[KREUZ].rcSrc;
			rcRectdes.left = SKARTEX/2-Bmp[KREUZ].Breite/2;
			rcRectdes.right= rcRectdes.left+Bmp[KREUZ].Breite;
			rcRectdes.top = SKARTEY/2-Bmp[KREUZ].Hoehe/2;
			rcRectdes.bottom= rcRectdes.top+Bmp[KREUZ].Hoehe;
			Blitten(Bmp[KREUZ].Surface,lpDDSSchatzkarte,true);
 			
			
			lpDDSSchatzkarte->Lock(null,&ddsd2,DDLOCK_WAIT,null);
			
			//Weichzeichnen
			for (i=0;i<SKARTEX;i++)
				for (j=0;j<SKARTEY;j++)
				{
					if ((i>0) && (i<SKARTEX-1) && (j>0) && (j<SKARTEY-1))
					{
						GetPixel(i-1,j,&ddsd2);
						rgbleft = rgbStruct;
						GetPixel(i,j-1,&ddsd2);
						rgbtop = rgbStruct;
						GetPixel(i+1,j,&ddsd2);
						rgbright = rgbStruct;
						GetPixel(i,j+1,&ddsd2);
						rgbbottom = rgbStruct;
						GetPixel(i,j,&ddsd2);
						PutPixel(i,j,RGB2DWORD(
							(rgbleft.r+rgbtop.r+rgbright.r+rgbbottom.r+rgbStruct.r)/5,
							(rgbleft.g+rgbtop.g+rgbright.g+rgbbottom.g+rgbStruct.g)/5,
							(rgbleft.b+rgbtop.b+rgbright.b+rgbbottom.b+rgbStruct.b)/5), 
							&ddsd2);
					}
				}
			lpDDSSchatzkarte->Unlock(null);
			break;
		}
    }
}

short RotateRight(short Dir)	//Richtungskoordinate rechtsrum umrechnen
{
	switch(Dir)
	{
	case 2 : { NewPos.x++;      NewPos.y++;     Dir=4; break; } 
	case 4 : { NewPos.x--;      NewPos.y++;     Dir=8; break; }
	case 8:  { NewPos.x--;      NewPos.y--;     Dir=1; break; }
	case 1 : { NewPos.x++;	    NewPos.y--;     Dir=2; break; }
	};
	return Dir;
}
 
bool LineIntersect(ZWEID LineStartPos, ZWEID Pos, bool store)
{	
	short		i;
	float	  x,y;
	short  Dx, Dy;
	float  Sx, Sy;
	bool	  erg = false;
	float	Nextx,Nexty;
	
	Steps=0;
		 
	Dx = LineStartPos.x-Pos.x;
	Dy = LineStartPos.y-Pos.y;
	x = LineStartPos.x;
	y = LineStartPos.y;
	if (abs(Dx)>abs(Dy)) 
	{
		if (Dx>0)  Sx = -1; else Sx = 1;
		if (Dx==0)  Sy = 0; else Sy = (float)Dy/((float)(Dx*Sx));
		Steps = abs(Dx);
	} 
	else
	{
		if (Dy>0)  Sy = -1; else Sy = 1;
		if (Dy==0)  Sx = 0; else Sx = (float)Dx/((float)(Dy*Sy));
		Steps = abs(Dy);
	}
		 
	for (i=0; i<Steps; i++) 
	{
		if (!Scape[ROUND(x)][ROUND(y)].Begehbar)  erg = true;
		if ((store)) 
		{
			Route[RouteLaenge].x = ROUND(x);
			Route[RouteLaenge].y = ROUND(y);
			RouteLaenge++;
		}
		Nextx = x + Sx;
		Nexty = y + Sy;
		if ((ROUND(y)!=ROUND(Nexty)) && (ROUND(x)!=ROUND(Nextx))) 
		{
			if (Scape[ROUND(x)][ROUND(Nexty)].Begehbar)
			{
				if ((store)) 
				{
					Route[RouteLaenge].x = ROUND(x);
					Route[RouteLaenge].y = ROUND(Nexty);
					RouteLaenge++;
				}
			}
			else
			{
				if (Scape[ROUND(Nextx)][ROUND(y)].Begehbar)
				{
					if ((store)) 
					{	
						Route[RouteLaenge].x = ROUND(Nextx);
						Route[RouteLaenge].y = ROUND(y);
						RouteLaenge++;
					}
				}
				else 
				{
					erg = true;
				}
			}
		}
		y = Nexty;
		x = Nextx;
	}
	//MessageBeep(MB_OK);
	return erg;	 
}

bool FindTheWay()
{
	ZWEID		Pos;
	short		Dir;
	
	ZWEID		Plist[MAXXKACH*MAXYKACH]; // Besuchte Punkte merken
	short		Llist[MAXXKACH*MAXYKACH]; // L�nge vom Punkt zum Ziel
	short		PCnt;
	bool		GoalReached;
	short		Shortest;
	short		DiffX,DiffY;
	short		StepCnt;
	
	ZWEID		ShPos;
	int     	ShStep;
	ZWEID		BestLine;
	ZWEID		LineStartPos;
	short		AI,BI,CI;
	ZWEID		ShortKoor;
	short		ShortEntf;


	
	for (AI=0;AI<MAXYKACH;AI++)
			for (BI=0;BI<MAXXKACH;BI++)
			{
				LenMap[AI][BI]= 65535;
				Llist[AI*BI] = 0;
				Plist[AI*BI].x = 0;
				Plist[AI*BI].y = 0;

			}
	ShortEntf   = -1;
	RouteLaenge = 0;	

	PCnt = 1;
	Plist[0] = RouteStart;
	DiffX = (RouteStart.x-RouteZiel.x);
	DiffY = (RouteStart.y-RouteZiel.y);
	Llist[0] = (DiffX*DiffX)+(DiffY*DiffY);
	
	LenMap[RouteStart.x][RouteStart.y]=0;
	Pos = RouteStart;
	NewPos = Pos;
	GoalReached = false;
	while((!GoalReached) && (PCnt > 0))
	{
		//den mit der k�rzesten Entfernung zum Ziel finden (der in der Liste ist)
		Shortest=0;
		for (CI = 0;CI <= PCnt-1; CI++)
		{
			if (Llist[CI]<Llist[Shortest]) 
			{
				Shortest=CI;
			}
		}
		//Mit dem N�chsten weitermachen
		Pos = Plist[Shortest];
		//Den k�rzesten merken
		if ((ShortEntf > Llist[Shortest]) || (ShortEntf == -1))
		{
			ShortEntf = Llist[Shortest];
			ShortKoor = Plist[Shortest];
		}
		
		//Den N�chsten aus der Liste l�schen
		Plist[Shortest] = Plist[PCnt-1];
		Llist[Shortest] = Llist[PCnt-1];
		PCnt--;
		NewPos = Pos;
		Dir = 2; NewPos.y--; //Oben nachschauen anfangen
		for (BI = 0; BI<=3; BI++) //In jede Richtung schauen
		{
			//ist das Feld noch nicht besucht und frei?
			if ((LenMap[NewPos.x][NewPos.y]==65535) &&
				(Scape[NewPos.x][NewPos.y].Begehbar)) 
			{
				// Wieviele Schritte braucht man um zu diesem Feld zu kommen 
				StepCnt = LenMap[Pos.x][Pos.y]+1;
				LenMap[NewPos.x][NewPos.y] = StepCnt;
				Plist[PCnt] = NewPos;
				//Die Entfernung in die Liste aufnehmen
				DiffX = (NewPos.x-RouteZiel.x);
				DiffY = (NewPos.y-RouteZiel.y);
				Llist[PCnt] = (DiffX*DiffX)+(DiffY*DiffY);
				PCnt++;
			}
			//Ziel erreicht?
			if ((NewPos.x==RouteZiel.x) && (NewPos.y==RouteZiel.y)) 
			{
				GoalReached = true;
				BI=3;
			}
			Dir = RotateRight(Dir);
		}
	}
	if ((PCnt == 0) || (!Scape[RouteZiel.x][RouteZiel.y].Begehbar)) 
	{
		RouteZiel.x = ShortKoor.x;
		RouteZiel.y = ShortKoor.y;
		
		if (FindTheWay()) return true;
		else return false;
	}
	else if (GoalReached) //Punkt r�ckw�rts durchgehen und Abk�rzungen finden
	{
		Pos = RouteZiel;
		LineStartPos = Pos;
		while ((Pos.x!=RouteStart.x) || (Pos.y!=RouteStart.y))
		{
			NewPos = Pos;
			ShStep = 65535;
			Dir = 2; NewPos.y--; //Zuerst nach oben probieren
			for (AI=0; AI<=3; AI++)
			{
				if (LenMap[NewPos.x][NewPos.y]<ShStep) 
				{
					ShStep=LenMap[NewPos.x][NewPos.y];
					ShPos = NewPos;
				}
				Dir = RotateRight(Dir);
			}
			Pos = ShPos;
			
			// Linie beste Linie ohne Unterbrechung finden
			if (!LineIntersect(LineStartPos,Pos,false))  
			{
				BestLine = Pos;
			}
			
			if ((Pos.x==RouteStart.x) && (Pos.y==RouteStart.y))  
			{
				Pos = BestLine;
				LineIntersect(LineStartPos,Pos,true);	
				LineStartPos = Pos;
			}
		}
		Route[RouteLaenge].x = RouteStart.x;
		Route[RouteLaenge].y = RouteStart.y;
		RouteLaenge++;
		
		SortRoute();	//Sortieren
	} 
	return true;
}

bool CheckRoute(short x, short y, bool save, short Laenge) //Nachpr�fen ob auf aktuellem Teil in der Route ist
{
	short i;
	
	if (!save)
	{
		for (i=0;i<RouteLaenge;i++)
		{
			if ((x == Route[i].x) && (y == Route[i].y)) return true;
		}
	}
	else
	{
		for (i=0;i<=Laenge;i++)
		{
			if ((x == SaveRoute[i].x) && (y == SaveRoute[i].y)) return true;
		}
	}
	return false;
}


void SortRoute()
{
	short i,j;
	ZWEID Pos;
	short Dir;

	Pos.x = RouteStart.x;
	Pos.y = RouteStart.y;
	for (i=0;i<RouteLaenge;i++) //Alle Teile vom Start durchgehen
	{
		SaveRoute[i].x = Pos.x;
		SaveRoute[i].y = Pos.y;
		
		RouteKoor[2*i].x =   
			(Scape[Pos.x][Pos.y].xScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][0].x +
			 Scape[Pos.x][Pos.y].xScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][2].x) /2;
		RouteKoor[2*i].y =   
			(Scape[Pos.x][Pos.y].yScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][1].y +
			 Scape[Pos.x][Pos.y].yScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][3].y) /2;
		
		NewPos.x = Pos.x;
		NewPos.y = Pos.y-1; //oben mit nachschauen anfangen
		Dir		 = 2;
		for (j=0;j<=3;j++)
		{
			if ((CheckRoute(NewPos.x,NewPos.y,false,RouteLaenge)) &&
				(!CheckRoute(NewPos.x,NewPos.y,true,i))) 
			{
				switch(j)
				{
				case 0:
					RouteKoor[2*i+1].x =   
						(Scape[Pos.x][Pos.y].xScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][1].x +
						 Scape[Pos.x][Pos.y].xScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][2].x) /2;
					RouteKoor[2*i+1].y =   
						(Scape[Pos.x][Pos.y].yScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][1].y +
						 Scape[Pos.x][Pos.y].yScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][2].y) /2;
					break;
				case 1:
					RouteKoor[2*i+1].x =   
						(Scape[Pos.x][Pos.y].xScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][2].x +
						 Scape[Pos.x][Pos.y].xScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][3].x) /2;
					RouteKoor[2*i+1].y =   
						(Scape[Pos.x][Pos.y].yScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][2].y +
						 Scape[Pos.x][Pos.y].yScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][3].y) /2;
					break;
				case 2:
					RouteKoor[2*i+1].x =   
						(Scape[Pos.x][Pos.y].xScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][3].x +
						 Scape[Pos.x][Pos.y].xScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][0].x) /2;
					RouteKoor[2*i+1].y =   
						(Scape[Pos.x][Pos.y].yScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][3].y +
						 Scape[Pos.x][Pos.y].yScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][0].y) /2;
					break;
				case 3:
					RouteKoor[2*i+1].x =   
						(Scape[Pos.x][Pos.y].xScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][0].x +
						 Scape[Pos.x][Pos.y].xScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][1].x) /2;
					RouteKoor[2*i+1].y =   
						(Scape[Pos.x][Pos.y].yScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][0].y +
						 Scape[Pos.x][Pos.y].yScreen+EckKoor[Scape[Pos.x][Pos.y].Typ][1].y) /2;
					break;
				}
				break;
			}
				
			Dir = RotateRight(Dir);
		}
		Pos.x = NewPos.x;
		Pos.y = NewPos.y;
	}
	for (i=0;i<=RouteLaenge;i++)	//Wieder in die Originalroute speichern
	{
		Route[i].x = SaveRoute[i].x;
		Route[i].y = SaveRoute[i].y;
	}
}

void ShortRoute(short Zielx, short Ziely)
{
	RouteLaenge = 1;
	Route[0].x = Guy.Pos.x;
	Route[0].y = Guy.Pos.y;
	RouteKoor[0].x = Guy.PosScreen.x;
	RouteKoor[0].y = Guy.PosScreen.y;
	Route[1].x = Guy.Pos.x;
	Route[1].y = Guy.Pos.y;
	RouteKoor[1].x = Zielx;
	RouteKoor[1].y = Ziely;

	//Die Animation gleich anschlie�end starten
	Guy.Aktiv = true;
	if ((BootsFahrt) && (Guy.Zustand != GUYSCHWIMMEN)) Guy.Zustand = GUYBOOTLINKS;
	else if (Guy.Zustand != GUYSCHWIMMEN)              Guy.Zustand = GUYLINKS;
	RoutePunkt = -1;
	Steps		= 0;
	Step		= 0;
}

void CheckBenutze(short Objekt)
{
	if (((Objekt == ROHSTEIN) && (TwoClicks == ROHAST)) ||
		((Objekt == ROHAST) && (TwoClicks == ROHSTEIN)))
	{
		if (Guy.Inventar[ROHAXT]<1)
		{
			Guy.Inventar[ROHSTEIN]--;
			Guy.Inventar[ROHAST]--;
			Guy.Inventar[ROHAXT] = 1;
			Bmp[BUTTFAELLEN].Phase = 0;
			Bmp[BUTTBOOT].Phase = 0;
			Bmp[BUTTROHR].Phase = 0;
			PapierText = DrawText(BAUEAXT,TXTPAPIER,1);
			PlaySound(WAVERFINDUNG,100);
		}
		else if (Guy.Inventar[ROHEGGE]<1)
		{
			Guy.Inventar[ROHSTEIN]--;
			Guy.Inventar[ROHAST]--;
			Guy.Inventar[ROHEGGE] = 1;
			Bmp[BUTTFELD].Phase = 0;
			PapierText = DrawText(BAUEEGGE,TXTPAPIER,1);
			PlaySound(WAVERFINDUNG,100);
		}
		else
		{
			PapierText = DrawText(STEINPLUSASTNICHTS,TXTPAPIER,1);
		}
	}
	else if (((Objekt == ROHLIANE) && (TwoClicks == ROHAST)) ||
		     ((Objekt == ROHAST) && (TwoClicks == ROHLIANE)))
	{
		if (Guy.Inventar[ROHANGEL]<1)
		{
			Guy.Inventar[ROHLIANE]--;
			Guy.Inventar[ROHAST]--;
			Guy.Inventar[ROHANGEL] = 1;
			Bmp[BUTTANGELN].Phase = 0;
			PapierText = DrawText(BAUEANGEL,TXTPAPIER,1);
			PlaySound(WAVERFINDUNG,100);
		}
		else
		{
			PapierText = DrawText(ASTPLUSLIANENICHTS,TXTPAPIER,1);
		}
	}
	else if (((Objekt == ROHLIANE) && (TwoClicks == ROHSTEIN)) ||
		     ((Objekt == ROHSTEIN) && (TwoClicks == ROHLIANE)))
	{
		if (Guy.Inventar[ROHSCHLEUDER]<1)
		{
			Guy.Inventar[ROHLIANE]--;
			Guy.Inventar[ROHSTEIN]--;
			Guy.Inventar[ROHSCHLEUDER] = 1;
			Bmp[BUTTSCHLEUDER].Phase = 0;
			PapierText = DrawText(BAUESCHLEUDER,TXTPAPIER,1);
			PlaySound(WAVERFINDUNG,100);
		}
		else
		{
			PapierText = DrawText(STEINPLUSLIANENICHTS,TXTPAPIER,1);
		}
	}
	else
	{
		PapierText = DrawText(NICHTBASTELN,TXTPAPIER,1);
	}
	TwoClicks = -1;
}


void Animationen()
{
	short x,y,i,j,k,loop; //Zwischenspeicher
	
	
	for (y=0;y<MAXYKACH;y++)
		for (x=0;x<MAXXKACH;x++)
		{
			j = Scape[x][y].Objekt;
			if ((j==-1) || (!Bmp[j].Animation)) continue;
			i = LastBild/Bmp[j].Geschwindigkeit;
			if (i<1) i = 1;
			if (Bild%i == 0)
			{
				if ((j>=BAUM1DOWN) && (j<=BAUM4DOWN) &&  //Die Baumf�llenanimation nur ein mal abspielen
					(Scape[x][y].Phase == Bmp[j].Anzahl-1));
				else Scape[x][y].Phase++;
				if (Scape[x][y].Phase>=Bmp[j].Anzahl) Scape[x][y].Phase = 0;
			}
			
		}
	
	for (j=BUTTGITTER;j<=BUTTDESTROY;j++)
	{
		if (!Bmp[j].Animation) continue;
		i = LastBild/Bmp[j].Geschwindigkeit;
		if (i<1) i = 1;
		if (Bild%i == 0)
		{
		   Bmp[j].Phase++;
		   if (Bmp[j].Phase>=Bmp[j].Anzahl) Bmp[j].Phase = 0;
		}
	}
	
	//Spielfigur

	//laufen
	if (((Guy.Zustand >= GUYLINKS) && (Guy.Zustand <= GUYUNTEN)) ||
		((Guy.Zustand >= GUYBOOTLINKS) && (Guy.Zustand <= GUYBOOTUNTEN)) ||
		( Guy.Zustand == GUYSCHIFF) || (Guy.Zustand == GUYSCHWIMMEN))
	{
		i = LastBild/Bmp[Guy.Zustand].Geschwindigkeit;
		if (i<1) i = 1;
		if (LastBild-Bmp[Guy.Zustand].Geschwindigkeit < 0) loop = 2; else loop=1;
		if (BootsFahrt) loop = loop*2;
		for (k=0;k<loop;k++) if ((Bild%i == 0) && (Guy.Aktiv)) CalcGuyKoor();
		return;
	}
	//sonstige Aktionen
	if ((Guy.Zustand >= GUYSUCHEN) && (Guy.Zustand <= GUYSCHLEUDER) && 
		(Bmp[Guy.Zustand].Phase != Bmp[Guy.Zustand].Anzahl))
	{
		i = LastBild/Bmp[Guy.Zustand].Geschwindigkeit;
		if (i<1) i = 1;
		if (Bild%i == 0)
		{
			Bmp[Guy.Zustand].Phase++;
			if (Bmp[Guy.Zustand].Phase>=Bmp[Guy.Zustand].Anzahl) 
			{
				Bmp[Guy.Zustand].Phase = 0;
				if (PapierText == -1) Guy.Aktiv = false;
			}
		}
	}
}

void CalcGuyKoor()
{	
	short	Dx,Dy;	//Differenz zwischen Ziel und Start
	
	if (Step >= Steps)
	{
		RoutePunkt++;
		
		if ((RoutePunkt >= (RouteLaenge>1 ? 2*(RouteLaenge-1):1) ||
			((Guy.Aktion == AKABBRUCH) && (RouteLaenge>1)))) 
		{
			if (RouteLaenge>1) Bmp[BUTTSTOP].Phase = -1;
			Bmp[Guy.Zustand].Phase = 0;
			Guy.Aktiv = false;
			RouteZiel.x = -1;
			RouteZiel.y = -1;
			return;
		}
		Guy.Pos.x = Route[(RoutePunkt+1)/2].x;
		Guy.Pos.y = Route[(RoutePunkt+1)/2].y;
		Entdecken();

		if (BootsFahrt) 
			 AddTime(0,Scape[Route[(RoutePunkt+1)/2].x][Route[(RoutePunkt+1)/2].y].LaufZeit*3);
		else AddTime(0,Scape[Route[(RoutePunkt+1)/2].x][Route[(RoutePunkt+1)/2].y].LaufZeit*5);
		AddResource(NAHRUNG,-1);
		AddResource(WASSER, -1);
		
		if ((Guy.Zustand == GUYSCHIFF) || (Guy.Zustand == GUYSCHWIMMEN)) Guy.Zustand -=2; //nichts machen
		else if (BootsFahrt) Guy.Zustand = GUYBOOTLINKS;
		else Guy.Zustand = GUYLINKS;
				
		if (RouteLaenge > 1)	//Bei normaler Routenabarbeitung die Richung Kachelm��ig rausfinden
		{
			if      (Route[RoutePunkt/2].x > Route[RoutePunkt/2+1].x) Guy.Zustand += 0;
			else if (Route[RoutePunkt/2].x < Route[RoutePunkt/2+1].x) Guy.Zustand += 2;
			else if (Route[RoutePunkt/2].y < Route[RoutePunkt/2+1].y) Guy.Zustand += 3;
			else if (Route[RoutePunkt/2].y > Route[RoutePunkt/2+1].y) Guy.Zustand += 1;
		}
		else
		{
			if      ((RouteKoor[RoutePunkt].x >  RouteKoor[RoutePunkt+1].x) && 
				     (RouteKoor[RoutePunkt].y >= RouteKoor[RoutePunkt+1].y)) Guy.Zustand += 0;
			else if ((RouteKoor[RoutePunkt].x <= RouteKoor[RoutePunkt+1].x) && 
				     (RouteKoor[RoutePunkt].y >  RouteKoor[RoutePunkt+1].y)) Guy.Zustand += 1;
			else if ((RouteKoor[RoutePunkt].x <  RouteKoor[RoutePunkt+1].x) &&
				     (RouteKoor[RoutePunkt].y <= RouteKoor[RoutePunkt+1].y)) Guy.Zustand += 2;
			else if ((RouteKoor[RoutePunkt].x >= RouteKoor[RoutePunkt+1].x) && 
				     (RouteKoor[RoutePunkt].y <  RouteKoor[RoutePunkt+1].y)) Guy.Zustand += 3;
		}
		
		Dx = RouteKoor[RoutePunkt+1].x-RouteKoor[RoutePunkt].x;
		Dy = RouteKoor[RoutePunkt+1].y-RouteKoor[RoutePunkt].y;
		GuyPosScreenStart.x = RouteKoor[RoutePunkt].x;
		GuyPosScreenStart.y = RouteKoor[RoutePunkt].y;
		Step = 0;
	
		if (abs(Dx)>abs(Dy)) 
		{
			if (Dx>0)  Schrittx = 1; else Schrittx = -1;
			if (Dx==0)  Schritty = 0; else Schritty = (float)Dy/((float)(Dx*Schrittx));
			Steps = abs(Dx);
			
		} 
		else
		{
			if (Dy>0)  Schritty = 1; else Schritty = -1;
			if (Dy==0)  Schrittx = 0; else Schrittx = (float)Dx/((float)(Dy*Schritty));
			Steps = abs(Dy);
		}
	
	}
	
	if (Bild % Scape[Guy.Pos.x][Guy.Pos.y].LaufZeit == 0)
	{
		Step++;
		short i;
		if (BootsFahrt) i = 4; else i = 2;
		if (Step%i == 0)
		{
			Bmp[Guy.Zustand].Phase++;
			if (Bmp[Guy.Zustand].Phase >= Bmp[Guy.Zustand].Anzahl) Bmp[Guy.Zustand].Phase = 0;
		}
		Guy.PosScreen.x = GuyPosScreenStart.x + ROUND(Step*Schrittx);
		Guy.PosScreen.y = GuyPosScreenStart.y + ROUND(Step*Schritty);
		if ((Spielzustand == SZINTRO) || (Spielzustand == SZGERETTET)) //Beim Intro f�hrt die Kamera mit
		{
			Camera.x = Guy.PosScreen.x-rcGesamt.right/2;
			Camera.y = Guy.PosScreen.y-rcGesamt.bottom/2;
		}
	}
}

void Entdecken()
{
	bool Aenderung = false;
	short i,j;

	for (i=-1;i<=1;i++)
		for (j=-1;j<=1;j++)
		{
			if (!Scape[Guy.Pos.x+i][Guy.Pos.y+j].Entdeckt) 
			{
				Scape[Guy.Pos.x+i][Guy.Pos.y+j].Entdeckt = true;
				Aenderung = true;
			}
		}

	if (Aenderung) Generate();
}

void CalcKoor()
{
	short				x,y;
	// Bildschirmkoordinaten berechnen und speichern
	for (y=0;y<MAXYKACH;y++)
		for (x=0;x<MAXXKACH;x++)
		{	
			Scape[x][y].xScreen			=	KXPIXEL/2*MAXXKACH+32+
				x * KXPIXEL / 2 - y * KYPIXEL /2 +
				(-6*y)+ x; //seltsame Korrekturen
			Scape[x][y].yScreen			=
				x * KXPIXEL /2  + y * KYPIXEL / 2-16*Scape[x][y].Hoehe +
				(-13*x) + (-8*y); //seltsame Korrekturen
			if ((x==0)		  && (y==0))				ScapeGrenze.top		= Scape[x][y].yScreen;
			if ((x==0)		  && (y==MAXYKACH-1))		ScapeGrenze.left	= Scape[x][y].xScreen;
			if ((x==MAXXKACH-1) && (y==MAXYKACH-1))		ScapeGrenze.bottom	= Scape[x][y].yScreen+KYPIXEL;
			if ((x==MAXXKACH-1) && (y==0))				ScapeGrenze.right	= Scape[x][y].xScreen+KXPIXEL;
		}

}

short Refresh()
{
	long Zeitsave;
	
	if (Spielzustand == SZNICHTS) 
	{
		Spielzustand = SZLOGO; 
		InitStructs(); //Nur zum Wavinitialisieren
	}
	while(1)
	{
		Bild++;
		time(&Zeitsave);
		if (Zeit+5 < Zeitsave)
		{
			Zeit = Zeitsave;
			LastBild = (LastBild+Bild/5)/2;
			Bild = 0;
			if (LastBild==0) LastBild = 50; 
			
			//BilderproSec ausgeben
			/*Textloeschen(TXTFPS);
			TextBereich[TXTFPS].Aktiv = true;
			sprintf(StdString, "%d", LastBild);
			DrawString(StdString,(short)TextBereich[TXTFPS].rcText.left,(short)TextBereich[TXTFPS].rcText.top,1);
	*/	}
		if (Spielzustand == SZLOGO)
		{
			if (CheckKey()==2) break;		//Das Keyboard abfragen
			ZeigeLogo(); //Bild auffrischen
						
		}
		else if ((Spielzustand == SZINTRO) || (Spielzustand == SZGERETTET))
		{
			if (CheckKey()==0) return(0);		//Das Keyboard abfragen

			Animationen();  //Animationen weiterschalten
			if (!Guy.Aktiv) Event(Guy.Aktion); //Aktionen starten
			if (Guy.Pos.x != RouteStart.x) ZeigeIntro(); //Bild auffrischen (if-Abfrage n�tig (seltsamerweise))
						
		}
		else if (Spielzustand == SZSPIEL)
		{
			if ((Stunden >= 12) && (Minuten != 0) && (Guy.Aktion != AKTAGENDE))	//Hier ist der Tag zuende
			{
				if (Guy.Aktion == AKAUSSCHAU) Chance -= 1 + Scape[Guy.Pos.x][Guy.Pos.y].Hoehe;
				Guy.Aktiv = false;
				Guy.AkNummer = 0;
				Guy.Aktion = AKTAGENDE;
			}
			
			CheckSpzButton();					//Die Spezialkn�pfe umschalten
			if (MouseAktiv) CheckMouse();		//Den MouseZustand abchecken
			if (CheckKey()==0) return(0);		//Das Keyboard abfragen
			LimitScroll();						//Das Scrollen an die Grenzen der Landschaft anpassen
			Animationen();						//Die Animationsphasen weiterschalten
			if (!Guy.Aktiv) Event(Guy.Aktion);  //Die Aktionen starten
			Zeige();//Das Bild zeichnen
			if (Spielbeenden) return(0);
		
		}
		else if (Spielzustand == SZABSPANN)
		{
			if (CheckKey()==0) return(0);
			AbspannCalc();
			ZeigeAbspann();
		}
	}
	return(1);
}

long FAR PASCAL WindowProc( HWND hWnd, UINT message, 
                            WPARAM wParam, LPARAM lParam )
{
		static BYTE phase = 0;
    
    switch( message )
    {
    case WM_ACTIVATEAPP:
        bActive = wParam;
		break;
    
	case WM_ACTIVATE:   // sent when window changes active state
        bActive=wParam; 
        SetAcquire();
		break;
		
    case WM_CREATE:
        break;
    case WM_TIMER:
		if (Refresh()==0) PostMessage(hwnd, WM_DESTROY,0,0);
		break;
	case WM_DESTROY:
       	finiObjects();
        PostQuitMessage( 0 );
        break;
    }

    return DefWindowProc(hWnd, message, wParam, lParam);

} /* WindowProc */

/*
 * doInit - do work required for every instance of the application:
 *                create the window, initialize data
 */
static BOOL doInit( HINSTANCE hInstance, int nCmdShow )
{
    
    WNDCLASS             wc;
    
    /*
     * set up and register window class
     */
    wc.style = CS_HREDRAW | CS_VREDRAW;
    wc.lpfnWndProc = WindowProc;
    wc.cbClsExtra = 0;
    wc.cbWndExtra = 0;
    wc.hInstance = hInstance;
    wc.hIcon = LoadIcon( hInstance, IDI_APPLICATION );
    wc.hCursor = LoadCursor( null, IDC_ARROW );
    wc.hbrBackground = null;
    wc.lpszMenuName = NAME;
    wc.lpszClassName = NAME;
    RegisterClass( &wc );
    
    /*
     * create a window
     */
    hwnd = CreateWindowEx(
        WS_EX_TOPMOST,
        NAME,
        TITLE,
        WS_POPUP,
        0,
        0,
        GetSystemMetrics( SM_CXSCREEN ),
        GetSystemMetrics( SM_CYSCREEN ),
        null,
        null,
        hInstance,
        null );

    if( !hwnd )
    {
        return FALSE;
    }
	
	InitDInput();
	MouseInit = true;
    	
	ShowWindow( hwnd, nCmdShow );
    UpdateWindow( hwnd );
	  
	InitDDraw();
	InitDSound();
		 
	SetTimer( hwnd, 0, 1000, null ); //Provisorisch
	srand( (unsigned)time(null)); //Random initialisieren
	return TRUE;
	
} /* doInit */

/*
 * WinMain - initialization, message loop
 */
int PASCAL WinMain( HINSTANCE hInstance, HINSTANCE hPrevInstance,
                        LPSTR lpCmdLine, int nCmdShow)
{
    MSG         msg;

    lpCmdLine = lpCmdLine;
    hPrevInstance = hPrevInstance;
	g_hInst = hInstance;
    if( !doInit( hInstance, nCmdShow ) )
    {
        return FALSE;
    }

    while(GetMessage(&msg, null, 0, 0))
    {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
	}

    return msg.wParam;

} /* WinMain */
