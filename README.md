��#   V u e x   C o m p o s i t i o n   M o d u l e s  
 [ ! [ c o d e   s t y l e :   p r e t t i e r ] ( h t t p s : / / i m g . s h i e l d s . i o / b a d g e / c o d e _ s t y l e - p r e t t i e r - f f 6 9 b 4 . s v g ? s t y l e = f l a t - s q u a r e ) ] ( h t t p s : / / g i t h u b . c o m / p r e t t i e r / p r e t t i e r )  
 [ ! [ B u i l d   S t a t u s ] ( h t t p s : / / t r a v i s - c i . o r g / P a t r y k W a l a c h / v u e x - c o m p o s i t i o n - a p i . s v g ? b r a n c h = m a s t e r ) ] ( h t t p s : / / t r a v i s - c i . o r g / P a t r y k W a l a c h / v u e x - c o m p o s i t i o n - a p i )  
 [ ! [ c o d e c o v ] ( h t t p s : / / c o d e c o v . i o / g h / P a t r y k W a l a c h / v u e x - c o m p o s i t i o n - a p i / b r a n c h / m a s t e r / g r a p h / b a d g e . s v g ) ] ( h t t p s : / / c o d e c o v . i o / g h / P a t r y k W a l a c h / v u e x - c o m p o s i t i o n - a p i )  
 # #   I n s t a l l    
 ` ` ` s h  
 n p m   i   v u e x - c o m p o s i t i o n - a p i  
 ` ` `  
 # #   A b o u t  
 T h i s   m o d u l e   t r i e s   t o   m i m i c   [ @ v u e / c o m p o s i t i o n - a p i ] ( h t t p s : / / g i t h u b . c o m / v u e j s / c o m p o s i t i o n - a p i )   i n s i d e   [ V u e x ] ( h t t p s : / / g i t h u b . c o m / v u e j s / v u e x )   m o d u l e s .  
 T h i s   m o d u l e   d o e s n ' t   r e q u i r e   V u e x .  
 # #   A P I  
  
 # # #   ` C o m p o s i t i o n A p i `  
 C a l l i n g   i t   i s   o p t i o n a l ,   i t   w i l l   i n s t a l l   V u e x   a s   w e l l   a s   V u e C o m p o s i t i o n A p i ,   w h i c h   c a n   b e   c a l l e d   e l s e w h e r e   i f   y o u   c h o o s e   t o   d o   s o .  
  
 ` ` ` t y p e s c r i p t  
 i m p o r t   C o m p o s i t i o n A p i   f r o m   ' v u e x - c o m p o s i t i o n - m o d u l e s '  
 i m p o r t   V u e   f r o m   ' v u e '  
 V u e . u s e ( C o m p o s i t i o n A p i )  
 ` ` `  
  
 # # #   ` C o m p o s i t i o n A p i . S t o r e `  
 D o e s n ' t   d i f f e r   f r o m   n o r m a l   V u e x   s t o r e  
 A n   o p t i o n   t o   u s e   s e t u p   i n s i d e   i t   w i l l   b e   a d d e d   i n   t h e   f u t u r e  
  
 ` ` ` t y p e s c r i p t  
 c o n s t   s t o r e   =   n e w   C o m p o s i t i o n A p i . S t o r e ( { } )  
 e x p o r t   d e f a u l t   s t o r e  
 ` ` `  
  
 # # #   ` C o m p o s i t i o n A p i . M o d u l e `  
 M o d u l e   r e q u i r e s   n a m e   a n d   a   s e t u p   f u n c t i o n  
  
 S e t u p   f u n c t i o n   r e t u r n   s t a t e ,   g e t t e r s ,   m u t a t i o n s ,   a c t i o n s  
 ` ` ` t y p e s c r i p t  
 n e w   C o m p o s i t i o n A p i . M o d u l e ( {  
         n a m e :   ' m o d u l e ' ,  
         s e t u p ( ) {  
                 r e t u r n   {  
                         s t a t e :   { } ,  
                         g e t t e r s :   { } ,  
                         m u t a t i o n s :   { } ,  
                         a c t i o n s :   { } ,  
                 }  
         }  
 } )  
 ` ` `  
  
 S e t u p   f u n c t i o n   p r o v i d e s   s t a t e ,   g e t t e r   a n d   m u t a t i o n   i n s i d e   f i r s t   p a r a m e t e r  
 ` ` ` t y p e s c r i p t  
 n e w   C o m p o s i t i o n A p i . M o d u l e ( {  
         n a m e :   ' m o d u l e ' ,  
         s e t u p ( {   s t a t e ,   g e t t e r ,   m u t a t i o n   } ) {  
         }  
 } )  
 ` ` `  
  
 S t a t e   a n d   g e t t e r   c a n   b e   i m p o r t e d   d i r e c t l y   f o r   r e u s a b i l i t y  
 ` ` ` t y p e s c r i p t  
 i m p o r t   {   s t a t e ,   g e t t e r   }   f r o m   ' v u e x - c o m p o s i t i o n - m o d u l e s '  
 c o n s t   u s e D a t a   =   ( )   = >   {  
         c o n s t   d a t a   =   s t a t e ( n u l l )  
         r e t u r n   {  
                 d a t a  
         }  
 }  
 n e w   C o m p o s i t i o n A p i . M o d u l e ( {  
         n a m e :   ' m o d u l e ' ,  
         s e t u p ( ) {  
                 c o n s t   {   d a t a   }   =   u s e D a t a ( )  
                 r e t u r n   {  
                         s t a t e :   {  
                                 d a t a  
                         }  
                 }  
         }  
 } )  
 ` ` `  
  
 S e t u p   r e s u l t s   a r e   a c c e s s i b l e   d i r e c t l y  
  
 ` ` ` t y p e s c r i p t  
 c o n s t   m o d u l e   =   n e w   C o m p o s i t i o n A p i . M o d u l e ( {  
         n a m e :   ' m o d u l e ' ,  
         s e t u p ( {   s t a t e   } ) {  
                 r e t u r n   {  
                         s t a t e :   {  
                                 x :   s t a t e ( n u l l )  
                         }  
                 }  
         } ,  
         n a m e s p a c e d :   t r u e  
 } )  
  
 m o d u l e . s t a t e . x . v a l u e   / /   e x p e c t e d   r e s u l t :   n u l l  
 ` ` `  
  
 M o d u l e s   c a n   b e   n a m e s p a c e d  
 ` ` ` t y p e s c r i p t  
 n e w   C o m p o s i t i o n A p i . M o d u l e ( {  
         n a m e :   ' m o d u l e ' ,  
         s e t u p ,  
         n a m e s p a c e d :   t r u e  
 } )  
 ` ` `  
  
 S u b s c r i b i n g   t o   a   m o d u l e   w i l l   e x e c u t e   g i v e n   c a l l b a c k   o n   e v e r y   c o m m i t  
  
 ` ` ` t y p e s c r i p t  
 c o n s t   M a i n   =   n e w   C o m p o s i t i o n A p i . M o d u l e ( {  
         n a m e :   ' m a i n ' ,  
         s e t u p ( ) {  
             c o n s t   d a t a   =   s t a t e ( [ ' ' ] )  
              
             c o n s t   C H A N G E _ D A T A   =   m u t a t i o n ( ' C H A N G E _ D A T A ' ,   {   d a t a   } ,   ( s t a t e ,   p a y l o a d )   = >   s t a t e . d a t a   =   p a y l o a d   )  
  
             . . .  
         } ,  
         n a m e s p a c e d :   t r u e  
 } )  
  
 M a i n . s u b s c r i b e ( ( {   t y p e ,   p a y l o a d   } ,   s t a t e )   = >   {  
 t y p e   / /   e x p e c t e d   o u t p u t :   ' C H A N G E _ D A T A '  
 p a y l o a d   / /   e x p e c t e d   o u t p u t :   [ ' n u l l ' ]  
 s t a t e   / /   e x p e c t e d   o u t p u t :   {   d a t a :   {   v a l u e :   [ ' n u l l ' ]   } }  
 } )  
  
 M a i n . m u t a t i o n s . C H A N G E _ D A T A ( [ ' n u l l ' ] )  
 ` ` `  
  
 # # #   ` C o m p o s i t i o n A p i . P l u g i n `  
 P l u g i n   r e c i v e s   a r r a y   o f   ` M o d u l e s `   a s   a r g u m e n t  
 C r e a t i n g   ` S t o r e `   a n d   u s i n g   t h e   p l u g i n   i s   o p t i o n a l ,   t h e   m o d u l e s   c a n   b e   u s e d   i n d e p e n d e n t l y ,   h o w e v e r   c a l l i n g   i t   a l l o w s   f o r   t r a c k i n g   s t a t e ,   g e t t e r s   a n d   c o m m i t s   w i t h   [ v u e - d e v t o o l s ] ( h t t p s : / / g i t h u b . c o m / v u e j s / v u e - d e v t o o l s )  
  
 ` ` ` t y p e s c r i p t  
 c o n s t   x   =   n e w   C o m p o s i t i o n A p i . M o d u l e ( o p t i o n s )  
 c o n s t   y   =   n e w   C o m p o s i t i o n A p i . M o d u l e ( o p t i o n s )  
  
 C o m p o s i t i o n A p i . S t o r e ( {  
         p l u g i n s :   [ C o m p o s i t i o n A p i . P l u g i n ( [ x ,   y ] ) ]  
 } )  
 ` ` `  
  
 # # #   ` s t a t e ( ) `  
 C a n   b e   a c c e s s e d   b y   c a l l i n g   ` . v a l u e `  
  
 ` ` ` t y p e s c r i p t  
 c o n s t   x   =   s t a t e ( n u l l )  
 x . v a l u e   / /   e x p e c t e d   o u t p u t :   n u l l  
 ` ` `  
  
 C a n ' t   b e   s e t   d i r e c t l y  
  
 ` ` ` t y p e s c r i p t  
 c o n s t   x   =   s t a t e ( n u l l )  
 x . v a l u e   =   ' ' / /   w i l l   t h r o w   a n   E r r o r  
 ` ` `  
  
 C a n   b e   s e t   u s i n g   ` . _ r e p l a c e ( ) `  
  
 A l t h o u g h   i t   i s   n o t   r e c o m m e n d e d ,   b e c a u s e   i t   w o n ' t   c h a n g e   s t a t e   i n s i d e   V u e x  
  
 ` ` ` t y p e s c r i p t  
 c o n s t   x   =   s t a t e ( n u l l )  
 x . _ r e p l a c e ( ' ' )  
 x . v a l u e   / /   e x p e c t e d   o u t p u t :   ' '  
 ` ` `  
  
 # # #   ` g e t t e r ( ) `  
 C a n   b e   a c c e s s e d   b y   c a l l i n g   ` . v a l u e `  
  
 ` ` ` t y p e s c r i p t  
 c o n s t   x   =   s t a t e ( n u l l )  
 c o n s t   y   =   g e t t e r ( ( )   = >   x . v a l u e )  
 y . v a l u e   / /   e x p e c t e d   o u t p u t :   n u l l  
 ` ` ` Module<any,any,any,any> 
  
 C a n ' t   b e   s e t  
 ` ` ` t y p e s c r i p t  
 c o n s t   x   =   s t a t e ( n u l l )  
 c o n s t   y   =   g e t t e r ( ( )   = >   x . v a l u e )  
 y . v a l u e   =   ' '   / /   w i l l   t h r o w   a n   E r r o r  
 ` ` `  
  
 T h e   o r i g i n a l   f u n c t i o n   c a n   b e   a c c e s s e d   b y   ` . _ g e t t e r `  
 ` ` ` t y p e s c r i p t  
 c o n s t   x   =   s t a t e ( n u l l )  
 c o n s t   y   =   g e t t e r ( ( )   = >   x . v a l u e )  
 y . _ g e t t e r   / /   e x p e c t e d   o u t p u t :   ( )   = >   x . v a l u e  
 ` ` `  
  
 # # #   ` m u t a t i o n ( ) `  
 I s   b o u n d   t o   t h e   g i v e n   m o d u l e  
  
 I t   t a k e s   o b j e c t   m a d e   o f   ` S t a t e `   a n d   r e t r i v e s   w r i t a b l e   v e r i o n   o f   i t   i n s i d e   a   c a l l b a c k  
  
 ` ` ` t y p e s c r i p t  
 c o n s t   x   =   s t a t e ( n u l l )  
 c o n s t   C H A N G E _ X   =   m u t a t i o n ( ' C H A N G E _ X ' ,   {   x   } ,   ( s t a t e ,   n e w X )   = >   s t a t e . x   =   n e w X )  
 C H A N G E _ X ( ' ' )  
 x . v a l u e   / /   e x p e c t e d   o u t p u t :   ' '  
 ` ` `  
  
 P l e a s e   d o n ' t   d e c o n s t r u c t   t h e   s t a t e   o r   i t   w i l l   l o s e   i t ' s   r e a c t i v i t y !  
 ` ` ` t y p e s c r i p t  
 c o n s t   x   =   s t a t e ( n u l l )  
 c o n s t   C H A N G E _ X   =   m u t a t i o n ( ' C H A N G E _ X ' ,   {   x   } ,   ( {   x   } ,   n e w X )   = >   x   =   n e w X )  
 C H A N G E _ X ( ' ' )  
 x . v a l u e   / /   e x p e c t e d   o u t p u t :   n u l l  
 ` ` `  
  
 # #   E x a m p l e  
 # # #   1 #  
 ` @ / s t o r e / i n d e x . t s `  
   ` ` ` t y p e s c r i p t  
 i m p o r t   V u e   f r o m   ' v u e '  
  
 i m p o r t   C o m p o s i t i o n A p i ,   {   S t a t e   }   f r o m   ' @ / v u e x - c o m p o s i t i o n - a p i '  
  
 V u e . u s e ( C o m p o s i t i o n A p i )  
  
 e x p o r t   c o n s t   M a i n   =   n e w   C o m p o s i t i o n A p i . M o d u l e ( {  
     n a m e :   ' m a i n ' ,  
     n a m e s p a c e d :   t r u e ,  
     s e t u p ( {   s t a t e ,   g e t t e r ,   m u t a t i o n   } )   {  
         c o n s t   d a t a :   S t a t e < {   x :   s t r i n g   }   |   n u l l >   =   s t a t e ( n u l l )  
  
         c o n s t   a r r a y D a t a :   S t a t e < s t r i n g [ ] >   =   s t a t e ( [ ] )  
  
         c o n s t   g e t A l l D a t a   =   g e t t e r ( ( )   = >   {  
             r e t u r n   {  
                 d a t a :   d a t a . v a l u e ,  
                 a r r a y D a t a :   a r r a y D a t a . v a l u e ,  
             }  
         } )  
  
         c o n s t   C H A N G E _ D A T A   =   m u t a t i o n (  
             ' C H A N G E _ D A T A ' ,  
             {   d a t a   } ,  
             ( s t a t e ,   v a l u e :   {   x :   s t r i n g   }   |   n u l l )   = >   {  
                 s t a t e . d a t a   =   v a l u e  
             } ,  
         )  
  
         c o n s t   P U S H _ A R R A Y _ D A T A   =   m u t a t i o n (  
             ' P U S H _ A R R A Y _ D A T A ' ,  
             {   a r r a y D a t a   } ,  
             ( s t a t e ,   v a l u e :   s t r i n g [ ] )   = >   {  
                 s t a t e . a r r a y D a t a . p u s h ( . . . v a l u e )  
             } ,  
         )  
  
         c o n s t   l o g A n d P u s h D a t a   =   ( p a y l o a d :   s t r i n g [ ] )   = >   {  
             P U S H _ A R R A Y _ D A T A ( p a y l o a d )  
         }  
  
         r e t u r n   {  
             s t a t e :   {  
                 d a t a ,  
                 a r r a y D a t a ,  
             } ,  
             g e t t e r s :   {  
                 g e t A l l D a t a ,  
             } ,  
             m u t a t i o n s :   {  
                 P U S H _ A R R A Y _ D A T A ,  
                 C H A N G E _ D A T A ,  
             } ,  
             a c t i o n s :   {  
                 l o g A n d P u s h D a t a ,  
             } ,  
         }  
     } ,  
 } )  
  
 c o n s t   s t o r e   =   n e w   C o m p o s i t i o n A p i . S t o r e ( {  
     p l u g i n s :   [ C o m p o s i t i o n A p i . P l u g i n ( [ M a i n ] ) ] ,  
 } )  
  
 e x p o r t   d e f a u l t   s t o r e  
 ` ` `  
  
 ` @ / A p p . v u e `  
 ` ` ` h t m l  
 < t e m p l a t e >    
     < d i v >  
             < b u t t o n   @ c l i c k = " C H A N G E _ D A T A ( {   x :   M a t h . r a n d o m ( ) . t o S t r i n g ( )   } ) " >  
                 C H A N G E _ D A T A  
             < / b u t t o n >  
             < b u t t o n   @ c l i c k = " l o g A n d P u s h D a t a ( [ M a t h . r a n d o m ( ) . t o S t r i n g ( ) ] ) " >  
                 L O G   A N D   P U S H   D A T A  
             < / b u t t o n >  
             { {   g e t A l l D a t a   } }  
     < / d i v >  
 < / t e m p l a t e >    
 < s c r i p t   l a n g = " t s " >  
 i m p o r t   {   M a i n   }   f r o m   ' @ / s t o r e '  
  
 e x p o r t   d e f a u l t   c r e a t e C o m p o n e n t ( {  
     n a m e :   ' a p p ' ,  
     s e t u p ( )   {  
         c o n s t   {   g e t t e r s ,   m u t a t i o n s ,   a c t i o n s   }   =   M a i n  
  
         r e t u r n   {   . . . g e t t e r s ,   . . . m u t a t i o n s ,   . . . a c t i o n s   }  
     } ,  
     c o m p o n e n t s :   {  
         H e l l o W o r l d ,  
     } ,  
 } )  
 < / s c r i p t >  
 ` ` `  
  
 # # #   2 #  
  
 ` @ / s t o r e / i n d e x . t s `  
 ` ` ` t y p e s c r i p t  
 . . .  
  
 e x p o r t   c o n s t   m o d u l e s   =   {   M a i n   }  
 c o n s t   s t o r e   =   n e w   C o m p o s i t i o n A p i . S t o r e ( {  
     p l u g i n s :   [ C o m p o s i t i o n A p i . P l u g i n ( [ M a i n ] ) ] ,  
 } )  
  
 e x p o r t   d e f a u l t   s t o r e  
 ` ` `  
  
 ` @ / m a i n . t s `  
 ` ` ` t y p e s c r i p t  
 . . .  
 i m p o r t   s t o r e ,   {   m o d u l e s   }   f r o m   ' @ / s t o r e '  
  
 n e w   V u e ( {  
     m o d u l e s ,  
     r e n d e r :   h   = >   h ( A p p ) ,  
     s t o r e ,  
 } ) . $ m o u n t ( ' # a p p ' )  
 ` ` `  
 ` @ / v u e . d . t s `  
 ` ` ` t y p e s c r i p t  
 i m p o r t   {   M o d u l e   }   f r o m   ' v u e x - c o m p o s i t i o n - a p i / d i s t / m o d u l e '  
 i m p o r t   V u e   f r o m   ' v u e '  
 i m p o r t   {   m o d u l e s   }   f r o m   ' @ / s t o r e '  
  
 d e c l a r e   m o d u l e   ' v u e / t y p e s / v u e '   {  
     i n t e r f a c e   V u e   {  
         $ m o d u l e s :   t y p e o f   m o d u l e s  
     }  
 }  
  
 d e c l a r e   m o d u l e   ' v u e / t y p e s / o p t i o n s '   {  
     i n t e r f a c e   C o m p o n e n t O p t i o n s < V   e x t e n d s   V u e >   {  
         m o d u l e s ? :   R e c o r d < s t r i n g ,   M o d u l e < a n y > >  
     }  
 }  
  
 ` ` `  
  
 ` @ / A p p . v u e `  
 ` ` ` h t m l  
 . . .  
 < s c r i p t   l a n g = " t s " >  
 e x p o r t   d e f a u l t   c r e a t e C o m p o n e n t ( {  
     s e t u p ( _ ,   {   r o o t   } )   {  
         c o n s t   {   g e t t e r s ,   m u t a t i o n s ,   a c t i o n s   }   =   r o o t . $ m o d u l e s . M a i n  
  
         r e t u r n   {   . . . g e t t e r s ,   . . . m u t a t i o n s ,   . . . a c t i o n s   }  
     } ,  
     . . .  
 } )  
 < / s c r i p t >  
 ` ` ` 