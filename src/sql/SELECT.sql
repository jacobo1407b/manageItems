SELECT
    EICB.ITEM_CLASS_ID AS PROP,
    EICT.ITEM_CLASS_NAME AS TEXT,
    EICB.ITEM_CLASS_CODE AS CODE
FROM
    EGP_ITEM_CLASSES_B EICB,
    EGP_ITEM_CLASSES_TL EICT
WHERE 1=1
AND EICT.ITEM_CLASS_ID = EICB.ITEM_CLASS_ID
AND EICT.LANGUAGE = NVL(:LANG,'US')

----------------------------------NUEVO--------------------------
SELECT 
INVENTORY_ITEM_STATUS_CODE CODE,
INVENTORY_ITEM_STATUS_NAME DISPLAY
 FROM EGP_ITEM_STATUS_TL
 WHERE LANGUAGE = NVL(:LANG,'US')



EGP_ITEM_REVISIONS_B
/fscmService/ItemServiceV2/ItemAttachment?WSDL
/ess/esswebservice?WSDL

https://docs.oracle.com/en/cloud/saas/supply-chain-management/22d/fasrp/op-itemsv2-itemsv2uniqid-child-itemattachment-post.html